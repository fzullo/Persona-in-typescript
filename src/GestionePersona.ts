import { Persona } from "./Persona";

export class gestionePersona{

    async CreaPersona(persona:Persona){
        const risposta= await fetch('http://localhost:5125/Persona/CreaPersona',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(persona)
        });
        if(!risposta.ok){
            throw new Error(`Errore durante la creazione della persona ${risposta.statusText}`)
        }

        return await risposta.json()
    }

    async GetPersonaFromId(id:string){
        const risposta= await fetch('http://localhost:5125/Persona/GetPersonafromId')

        if (!risposta.ok) {
            throw new Error(`Errore durante il recupero della persona: ${risposta.statusText}`);
        }

        return await risposta.json();
    }

    async UpdatePersona(id: string, persona: Persona) {
        const risposta = await fetch(`http://localhost:5125/Persona/UpdatePersona`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(persona)
        });

        if (!risposta.ok) {
            throw new Error(`Errore durante l'aggiornamento della persona: ${risposta.statusText}`);
        }

        return await risposta.json();
    }

    async DeletePersona(id: string) {
        const risposta = await fetch(`http://localhost:5125/Persona/DeletePersona`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!risposta.ok) {
            throw new Error(`Errore durante l'eliminazione della persona: ${risposta.statusText}`);
        }

        return `Persona con ID ${id} eliminata con successo`;
    }
}