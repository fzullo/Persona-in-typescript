import { Persona } from "./Persona";
import { Dominio } from "./Dominio";

export class Studente extends Persona {
    dominio=Dominio.Studente;

    override getDati():string{
        return(`Dominio:${this.dominio}:Nome ${this.nome}:Cognome:${this.cognome} :eta ${this.calcolaEta()} email:${this.email}`)
    }
}
