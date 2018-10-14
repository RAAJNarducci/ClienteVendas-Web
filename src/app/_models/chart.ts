export interface IChart {
    mes: string;
    total: number;
    totalFormatado: string;
    exibir: boolean;
}

export interface IChartParams {
    dataInicio: Date;
    dataFim: Date;
}
