"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const Persona_1 = require("./Persona");
const Dominio_1 = require("./Dominio");
class Docente extends Persona_1.Persona {
    constructor() {
        super(...arguments);
        this.dominio = Dominio_1.Dominio.Docente;
    }
    getDati() {
        return (`${this.dominio}:Nome ${this.nome}:Cognome:${this.cognome} :eta ${this.calcolaEta()} email:${this.email}`);
    }
}
exports.Docente = Docente;
