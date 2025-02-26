import { Aluno } from "./aluno";
export class Cursinho {
    id:number;
    nomeCursinho: String;
    email:String;
    senha: String;
    alunos: Aluno[];

    constructor(){
        this.id=0;
        this.nomeCursinho="";
        this.email="";
        this.senha="";
        this.alunos=[];
    }
}
