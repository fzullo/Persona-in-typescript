import { Dominio } from "./Dominio";


export abstract class Persona{
    constructor(public id:number,public nome: string,public cognome:string,public DataDiNascita: Date, public dominio:Dominio){}

    get email(){
        return(`${this.nome.charAt(0).toLowerCase }${this.cognome.toLowerCase()}@${Dominio}.com`);
    }

    getDati(){
        return (`Identificativo ${this.id}\n Nominativo:${this.nome} ${this.cognome}`);
    }

    calcolaEta():number{
       let oggi= new Date();
       let eta= oggi.getDate()-this.DataDiNascita.getDate();
       if(oggi.getMonth()<this.DataDiNascita.getMonth()||
       (oggi.getMonth()===this.DataDiNascita.getMonth()) && oggi.getDate<this.DataDiNascita.getDate){
        eta--;
       }
       return eta;
    }
    
} 