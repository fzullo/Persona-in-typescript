import { Persona } from "./Persona";
import { Dominio } from "./Dominio";
export class Docente extends Persona{
    dominio=Dominio.Docente;
    override getDati():string{
        return(`${this.dominio}:Nome ${this.nome}:Cognome:${this.cognome} :eta ${this.calcolaEta()} email:${this.email}`)
    }
}