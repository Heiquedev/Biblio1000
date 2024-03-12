import { Genero } from "../Enums/Genero";
import { Estado } from "../Enums/Estado";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { NomeRandom } from "../Enums/NomeRandom";
import * as prompSync from 'prompt-sync'
const prompt = prompSync()

let livru0 = new Livro(NomeRandom.name1,Genero.genero0, Estado.d);
let livru1 = new Livro(NomeRandom.name1,Genero.genero1, Estado.d);
let livru2 = new Livro(NomeRandom.name1,Genero.genero2, Estado.e);
let livru3 = new Livro(NomeRandom.name1,Genero.genero3, Estado.r);
let livru4 = new Livro(NomeRandom.name1,Genero.genero4, Estado.a);
let usuariu0 = new Usuario(`Cleber`, 1, `jairinjk@gmail.com`, 976899118 );
let usuariu1 = new Usuario(`Jairo`, 2, `jairinjk@gmail.com`, 997870018);


const arrayTotal: object[] = [livru0, livru1, livru2, livru3, livru4];

let listaDeU:Array<Usuario> = [];
let HisX0:Array<Livro> = [];
let HisX1:Array<Livro> = [];
let listaD:Array<Livro> = [];
let listaA:Array<Livro> = [];
let listaE:Array<Livro> = [];
let listaR:Array<Livro> = [];

function livrosDisponiveis(livro:Livro){
    if (livro.estado == 'Disponivel') {
           listaD.push(livro)
        }else {
            console.log(`Ele não consta na lista dos ${Estado.d}`);
            
        }
    }
    
function livrosEmprestados(livro:Livro){
    if (livro.estado == 'Disponivel') {
            listaE.push(livro)
        }else {
            console.log(`este livro não está ${Estado.d}`);
                
            }
        }

function livrosComReserva(livro:Livro){
    if (livro.estado == 'Disponivel') {
            listaR.push(livro)
        }else {
            console.log(`Ele não consta na lista dos ${Estado.r}`);
                    
            }
        }
        
function livrosComAtrasado(livro:Livro){
    if (livro.estado == 'Atrasado') {
    let ask:number = prompt(`Quantos dias de atraso? `)
    console.log(`Sua multa será de ${ask * 0.79} reais`);
         
        }else {
            console.log(`Ele não pode constar ou cosnta na lista dos ${Estado.a}`);
        }                     
    }

function cadastro(Usuario: Usuario){
    listaDeU.push(Usuario)
     
}

livrosDisponiveis(livru0)
livrosDisponiveis(livru1)
livrosDisponiveis(livru2)
livrosDisponiveis(livru3)
livrosDisponiveis(livru4)
livrosComAtrasado(livru4)
cadastro(usuariu0)
cadastro(usuariu1)





