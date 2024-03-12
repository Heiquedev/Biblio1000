import { Genero } from "../Enums/Genero";
import { Estado } from "../Enums/Estado";
import { NomeRandom } from "../Enums/NomeRandom";

export class Livro{
    genero:Genero;
    nome:NomeRandom;
    estado:Estado;
    
    constructor(nome:NomeRandom, genero:Genero, estado:Estado){
        this.genero = genero;
        this.nome = nome
        this.estado = estado
    }

    infoLivro(){
        console.log(`Nome: ${this.nome} \nGeneros: ${this.genero} \nEstado: ${this.estado}`)
    }
}