"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studente = void 0;
const Persona_1 = require("./Persona");
const Dominio_1 = require("./Dominio");
class Studente extends Persona_1.Persona {
    constructor() {
        super(...arguments);
        this.dominio = Dominio_1.Dominio.Studente;
    }
    getDati() {
        return (`Dominio:${this.dominio}:Nome ${this.nome}:Cognome:${this.cognome} :eta ${this.calcolaEta()} email:${this.email}`);
    }
}
exports.Studente = Studente;
