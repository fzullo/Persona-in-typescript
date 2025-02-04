"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GestionePersona_1 = require("./GestionePersona");
const Dominio_1 = require("./Dominio");
const Studente_1 = require("./Studente");
// Creiamo un'istanza della classe gestionePersona
const api = new GestionePersona_1.gestionePersona();
const nuovaPersona = new Studente_1.Studente(123, "Mario", "Rossi", new Date("1990-05-12T00:00:00"), Dominio_1.Dominio.Studente);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Creazione della persona...");
            const personaCreata = yield api.CreaPersona(nuovaPersona);
            console.log("Persona creata:", personaCreata);
            console.log("Recupero della persona...");
            const personaRecuperata = yield api.GetPersonaFromId(nuovaPersona.id.toString());
            console.log("Persona recuperata:", personaRecuperata);
            console.log("Aggiornamento della persona...");
            nuovaPersona.nome = "Luigi";
            const personaAggiornata = yield api.UpdatePersona(nuovaPersona.id.toString(), nuovaPersona);
            console.log("Persona aggiornata:", personaAggiornata);
            console.log("Eliminazione della persona...");
            const eliminazione = yield api.DeletePersona(nuovaPersona.id.toString());
            console.log(eliminazione);
        }
        catch (errore) {
            console.error("Errore:", errore);
        }
    });
}
// Avviamo il main
main();
