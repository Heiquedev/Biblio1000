import { Livro } from "./Livro";

export class Usuario{
    public name:string;
    public id:number;
    private email:string;
    private numero:number
    

    constructor(name:string, id:number, email:string, numero:number){
        this.name = name;
        this.id = id;
        this.email = email;
        this.numero = numero
       
    }

    infoUsuario(){
        console.log(`Nome: ${this.name} \nID: ${this.id} `);
    }
}