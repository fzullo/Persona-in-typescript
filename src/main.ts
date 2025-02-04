import { gestionePersona } from "./GestionePersona";
import { Persona } from "./Persona";
import { Dominio } from "./Dominio";
import { Studente } from "./Studente";

// Creiamo un'istanza della classe gestionePersona
const api = new gestionePersona();

const nuovaPersona= new Studente(
    123, 
    "Mario", 
    "Rossi", 
    new Date("1990-05-12T00:00:00"),
    Dominio.Studente
)


