import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  
  url: string = 'http://localhost:8087/api/v1/usuario';

  constructor(private httpClient: HttpClient) { }

  async listar(): Promise<Usuario[]> {
    return await firstValueFrom(this.httpClient.get<Usuario[]>(this.url));
  }

  async excluir(id: number): Promise<Usuario> {
    let urlAuxiliar = this.url + "/" + id;
    return await firstValueFrom(this.httpClient.delete<Usuario>(urlAuxiliar));
  }

  async salvar(usuario:Usuario): Promise<Usuario> {
    return await firstValueFrom(this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpHeaders))
  }

  async buscarPorId(id: number): Promise<Usuario> {
    let urlAuxiliar = this.url + "/" + id;
    return await firstValueFrom(this.httpClient.get<Usuario>(urlAuxiliar));
  }

  async logar(n: string, s: string){
    let urlAuxiliar = this.url + "/" + n + "/" + s
    return await firstValueFrom(this.httpClient.get<Usuario>(urlAuxiliar))
  }
}
