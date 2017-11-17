import {Cidade} from '../cidade/cidade';

export class Pessoa {
    id: number;
    nome: string;
    cpf: number;
    dataNascimento: Date;
    maiorIdade: boolean;
    cidade: Cidade;
}
