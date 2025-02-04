"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const Dominio_1 = require("./Dominio");
class Persona {
    constructor(id, nome, cognome, DataDiNascita, dominio) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.DataDiNascita = DataDiNascita;
        this.dominio = dominio;
    }
    get email() {
        return (`${this.nome.charAt(0).toLowerCase}${this.cognome.toLowerCase()}@${Dominio_1.Dominio}.com`);
    }
    getDati() {
        return (`Identificativo ${this.id}\n Nominativo:${this.nome} ${this.cognome}`);
    }
    calcolaEta() {
        let oggi = new Date();
        let eta = oggi.getDate() - this.DataDiNascita.getDate();
        if (oggi.getMonth() < this.DataDiNascita.getMonth() ||
            (oggi.getMonth() === this.DataDiNascita.getMonth()) && oggi.getDate < this.DataDiNascita.getDate) {
            eta--;
        }
        return eta;
    }
}
exports.Persona = Persona;
