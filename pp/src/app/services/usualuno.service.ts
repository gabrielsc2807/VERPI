import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class UsualunoService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  
  url: string = 'http://localhost:8087/api/v1/usuario/aluno'

  constructor(private httpClient: HttpClient) { }

  async salvarNota(aluno:Aluno): Promise<number> {
    return await firstValueFrom(this.httpClient.put<number>(this.url, JSON.stringify(aluno), this.httpHeaders))
  }

  async buscarPorId(id: number): Promise<Aluno> {
    let urlAuxiliar = this.url + "/" + id;
    return await firstValueFrom(this.httpClient.get<Aluno>(urlAuxiliar));
  }
}
