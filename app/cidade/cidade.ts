import {Estado} from "../estado/estado";

export class Cidade {
    id: number;
    nome: string;
    estado: Estado;

    constructor(public id: number, public nome: string, public estado: Estado){}
}


