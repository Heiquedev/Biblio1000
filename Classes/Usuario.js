"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(name, id, email, numero) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.numero = numero;
    }
    Usuario.prototype.infoUsuario = function () {
        console.log("Nome: ".concat(this.name, " \nID: ").concat(this.id, " "));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
