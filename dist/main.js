"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GestionePersona_1 = require("./GestionePersona");
const Dominio_1 = require("./Dominio");
const Studente_1 = require("./Studente");
// Creiamo un'istanza della classe gestionePersona
const api = new GestionePersona_1.gestionePersona();
const nuovaPersona = new Studente_1.Studente(123, "Mario", "Rossi", new Date("1990-05-12T00:00:00"), Dominio_1.Dominio.Studente);
