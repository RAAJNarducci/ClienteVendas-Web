import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient, ISearchClientParams, IClientResponse } from '../_models/client';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../_helpers/error-handler';
import { ISale } from '../_models/sale';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientService {
    apiUrl = environment.apiUrl;
    clients: IClient[];

    constructor(private http: HttpClient,
        private errorHandler: ErrorHandler) {}

    findClients(params: ISearchClientParams, pagination: any) {
        const queryParams = Object.keys(params)
        .filter(key => params[key] || params[key] === false)
        .map(key => `${key}=${params[key]}`)
        .join('&');

        const queryPagination = Object.keys(pagination)
        .filter(key => pagination[key] || pagination[key] === false)
        .map(key => `${key}=${pagination[key]}`)
        .join('&');

        return this.http.get<IClientResponse>(`${this.apiUrl}/Cliente/BuscarClientes?${queryParams}&${queryPagination}`)
        .pipe(
            catchError(this.errorHandler.getError)
        );
    }

    findSales(clientId: number) {
        return this.http.get<ISale[]>(`${this.apiUrl}/Venda/BuscarVendasPorClienteId?clienteId=${clientId}`)
        .pipe(
            catchError(this.errorHandler.getError)
        );
    }

    findById(id: number) {
        return this.http.get<IClient>(`${this.apiUrl}/Pessoa/GetById?id=${id}`)
        .pipe(
            catchError(this.errorHandler.getError)
        );
    }
}
