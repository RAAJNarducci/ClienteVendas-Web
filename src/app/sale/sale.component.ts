import { Component, OnInit } from '@angular/core';
import { ChartService } from '../_services/chart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IChart } from '../_models/chart';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  submitted = false;
  searchForm: FormGroup;
  sales: IChart[];
  charts: Array<{
    title: string,
    type: string,
    data: Array<Array<string | number | {}>>,
    roles: Array<{type: string, role: string}>,
    columnNames?: Array<string>,
    options?: {}
  }> = [];

  constructor(
    private chartService: ChartService,
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      dataInicio: ['', null],
      dataFim: ['', null]
    });
    this.findSales();
  }

  get f() { return this.searchForm.controls; }

  findSales() {
    if (this.searchForm.invalid) {
      return;
    }
    if (this.charts.length > 0) {
      this.charts.splice(0, 1);
    }
    this.chartService.chart(this.searchForm.value).pipe(
      map(val => {
          this.sales = val,
          this.createChart(this.sales);
        })
    ).subscribe();
  }

  createChart(data: IChart[]) {
    this.charts.push({
      title: 'Gráfico de vendas - Mensal',
      type: 'LineChart',
      columnNames: ['Element', 'Total de vendas em R$'],
      roles: [
        {type: 'string', role: 'annotationText'},
        {type: 'boolean', role: 'certainty'}
      ],
      data: this.convertToArray(data)
    });
  }

  convertToArray(data: IChart[]) {
    const array = [];
    data.forEach(element => {
      const item = [element.mes, element.total, element.totalFormatado, element.exibir];
      array.push(item);
    });
    return array;
  }
}
