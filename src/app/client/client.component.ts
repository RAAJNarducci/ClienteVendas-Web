import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IClient } from '../_models/client';
import { map } from 'rxjs/operators';
import { ClientService } from '../_services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  searchForm: FormGroup;
  clients: IClient[];
  submitted = false;
  id: 0;
  totalItens: 0;
  isResult = false;

  pagination = {
    totalItems: 0,
    quantidadePagina: 10,
    pagina: 1
  };

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      nome: ['', null],
      cpf: ['', Validators.minLength(11)]
    });
    // this.search();
  }

  get f() { return this.searchForm.controls; }

  search() {
    this.clientService.findClients(this.searchForm.value, this.pagination).pipe(
      map(val => {
          this.clients = val.clientes,
          this.isResult = val.clientes.length > 0 ? true : false,
          this.pagination.totalItems = val.totalItens;
        })
    ).subscribe();
  }

  getPage(page) {
    this.pagination.pagina = page;
    this.search();
  }
}

