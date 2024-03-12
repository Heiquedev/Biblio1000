"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genero_1 = require("../Enums/Genero");
var Estado_1 = require("../Enums/Estado");
var Livro_1 = require("./Livro");
var Usuario_1 = require("./Usuario");
var NomeRandom_1 = require("../Enums/NomeRandom");
var prompSync = require("prompt-sync");
var prompt = prompSync();
var livru0 = new Livro_1.Livro(NomeRandom_1.NomeRandom.name1, Genero_1.Genero.genero0, Estado_1.Estado.d);
var livru1 = new Livro_1.Livro(NomeRandom_1.NomeRandom.name1, Genero_1.Genero.genero1, Estado_1.Estado.d);
var livru2 = new Livro_1.Livro(NomeRandom_1.NomeRandom.name1, Genero_1.Genero.genero2, Estado_1.Estado.e);
var livru3 = new Livro_1.Livro(NomeRandom_1.NomeRandom.name1, Genero_1.Genero.genero3, Estado_1.Estado.r);
var livru4 = new Livro_1.Livro(NomeRandom_1.NomeRandom.name1, Genero_1.Genero.genero4, Estado_1.Estado.a);
var usuariu0 = new Usuario_1.Usuario("Cleber", 1, "jairinjk@gmail.com", 976899118);
var usuariu1 = new Usuario_1.Usuario("Jairo", 2, "jairinjk@gmail.com", 997870018);
var arrayTotal = [livru0, livru1, livru2, livru3, livru4];
var listaDeU = [];
var HisX0 = [];
var HisX1 = [];
var listaD = [];
var listaA = [];
var listaE = [];
var listaR = [];
function livrosDisponiveis(livro) {
    if (livro.estado == 'Disponivel') {
        listaD.push(livro);
    }
    else {
        console.log("Ele n\u00E3o consta na lista dos ".concat(Estado_1.Estado.d));
    }
}
function livrosEmprestados(livro) {
    if (livro.estado == 'Disponivel') {
        listaE.push(livro);
    }
    else {
        console.log("este livro n\u00E3o est\u00E1 ".concat(Estado_1.Estado.d));
    }
}
function livrosComReserva(livro) {
    if (livro.estado == 'Disponivel') {
        listaR.push(livro);
    }
    else {
        console.log("Ele n\u00E3o consta na lista dos ".concat(Estado_1.Estado.r));
    }
}
function livrosComAtrasados(livro) {
    if (livro.estado == 'Atrasado') {
        var ask = prompt("Quantos dias de atraso? ");
        console.log("Sua multa ser\u00E1 de ".concat(ask * 0.79, " reais"));
    }
    else {
        console.log("Ele n\u00E3o pode constar ou cosnta na lista dos ".concat(Estado_1.Estado.a));
    }
}
function cadastro(Usuario) {
    listaDeU.push(Usuario);
}
livrosDisponiveis(livru0);
livrosDisponiveis(livru1);
livrosDisponiveis(livru2);
livrosDisponiveis(livru3);
livrosDisponiveis(livru4);
livrosComAtrasados(livru4);
cadastro(usuariu0);
cadastro(usuariu1);
