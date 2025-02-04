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
exports.gestionePersona = void 0;
class gestionePersona {
    CreaPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const risposta = yield fetch('http://localhost:5125/Persona/CreaPersona', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(persona)
            });
            if (!risposta.ok) {
                throw new Error(`Errore durante la creazione della persona ${risposta.statusText}`);
            }
            return yield risposta.json();
        });
    }
    GetPersonaFromId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const risposta = yield fetch('http://localhost:5125/Persona/GetPersonafromId');
            if (!risposta.ok) {
                throw new Error(`Errore durante il recupero della persona: ${risposta.statusText}`);
            }
            return yield risposta.json();
        });
    }
    UpdatePersona(id, persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const risposta = yield fetch(`http://localhost:5125/Persona/UpdatePersona`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(persona)
            });
            if (!risposta.ok) {
                throw new Error(`Errore durante l'aggiornamento della persona: ${risposta.statusText}`);
            }
            return yield risposta.json();
        });
    }
    DeletePersona(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const risposta = yield fetch(`http://localhost:5125/Persona/DeletePersona`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!risposta.ok) {
                throw new Error(`Errore durante l'eliminazione della persona: ${risposta.statusText}`);
            }
            return `Persona con ID ${id} eliminata con successo`;
        });
    }
}
exports.gestionePersona = gestionePersona;
