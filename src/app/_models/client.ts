export interface IClient {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    dataNascimentoSemMascara?: string;
    celular: string;
}

export interface IPagination {
    totalItens: number;
    quantidadePagina: number;
    pagina: number;
    ordenacao: string;
}

export interface ISearchClientParams {
    nome?: string;
    cpf?: string;
    pagination: IPagination;
}

export interface IClientResponse {
    clientes: IClient[];
    totalItens: number;
}

export interface IClientGet {
    id: number;
    nome: string;
}
