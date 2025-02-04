import { Persona } from "./Persona";

export class gestionePersona{

    async CreaPersona(persona:Persona){
        const risposta= await fetch('http://localhost:5125/swagger/index.html',{
            method:'POST',
            body:JSON.stringify(persona)
        });
        if(!risposta.ok){
            throw new Error(`Errore durante la creazione della persona ${risposta.statusText}`)
        }
    }
}