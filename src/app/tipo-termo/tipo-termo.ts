import { Termo } from '../termo/termo';

export interface TipoTermo {
    id: number;
    nome: string;
    termos?: Termo[];
}
