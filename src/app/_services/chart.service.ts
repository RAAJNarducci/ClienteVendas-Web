import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../_helpers/error-handler';
import { IChart, IChartParams } from '../_models/chart';
import { environment } from '../../environments/environment';

@Injectable()
export class ChartService {
    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient,
        private errorHandler: ErrorHandler) {}

    chart(params: IChartParams) {
        const queryParams = Object.keys(params)
        .filter(key => params[key] || params[key] === false)
        .map(key => `${key}=${params[key]}`)
        .join('&');

        return this.http.get<IChart[]>(`${this.apiUrl}/Venda/BuscarVendas?${queryParams}`)
        .pipe(
            catchError(this.errorHandler.getError)
        );
    }
}
