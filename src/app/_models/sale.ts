export interface ISale {
    dataVendaFormatada: string;
    quantidade: number;
    produto: IProduct;
}

export interface IProduct {
    descricao: string;
    valorFormatado: string;
}
