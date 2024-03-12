"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(nome, genero, estado) {
        this.genero = genero;
        this.nome = nome;
        this.estado = estado;
    }
    Livro.prototype.infoLivro = function () {
        console.log("Nome: ".concat(this.nome, " \nGeneros: ").concat(this.genero, " \nEstado: ").concat(this.estado));
    };
    return Livro;
}());
exports.Livro = Livro;
