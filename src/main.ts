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

async function main() {
    try {
        console.log("Creazione della persona...");
        const personaCreata = await api.CreaPersona(nuovaPersona);
        console.log("Persona creata:", personaCreata);

        console.log("Recupero della persona...");
        const personaRecuperata = await api.GetPersonaFromId(nuovaPersona.id.toString());
        console.log("Persona recuperata:", personaRecuperata);

        console.log("Aggiornamento della persona...");
        nuovaPersona.nome = "Luigi"; 
        const personaAggiornata = await api.UpdatePersona(nuovaPersona.id.toString(), nuovaPersona);
        console.log("Persona aggiornata:", personaAggiornata);

        console.log("Eliminazione della persona...");
        const eliminazione = await api.DeletePersona(nuovaPersona.id.toString());
        console.log(eliminazione);
    } catch (errore) {
        console.error("Errore:", errore);
    }
}

// Avviamo il main
main();
