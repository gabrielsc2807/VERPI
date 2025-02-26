import { Nota } from "./nota";

export class Aluno {
    id: number;
	idCursinho: number;
    nota1: string
    nota2: string
    nota3: string

    constructor(){
        this.id=0;
        this.idCursinho=0;
        this.nota1="";
        this.nota2="";
        this.nota3="";
    }
}
