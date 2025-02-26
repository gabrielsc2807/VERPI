import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { UsuarioAluno } from '../model/usuarioAluno';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class CurGerenciarService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  
  url: string = 'http://localhost:8087/api/v1/usuario/cursinho'

  constructor(private httpClient: HttpClient) { }

  async listarA(idC: number): Promise<UsuarioAluno[]> {
    let urlAuxiliar = this.url + "/" + idC;
    return await firstValueFrom(this.httpClient.get<UsuarioAluno[]>(urlAuxiliar));
  }

  async salvar(idC:number, idA:number){
    let urlAuxiliar = this.url + "/" + idC + "/" + idA;
    await firstValueFrom(this.httpClient.put<Aluno[]>(urlAuxiliar, ""));
  }

  async listarADis(): Promise<UsuarioAluno[]> {
    let urlAuxiliar = this.url + "/disponiveis";
    return await firstValueFrom(this.httpClient.get<UsuarioAluno[]>(urlAuxiliar));
  }

  async excluirA(idA: number) {
    let urlAuxiliar = this.url +"/"+idA;
    await firstValueFrom(this.httpClient.put<Aluno[]>(urlAuxiliar, ""));
  }
}
