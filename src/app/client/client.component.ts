import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IClient } from '../_models/client';
import { map } from 'rxjs/operators';
import { ClientService } from '../_services/client.service';
import { Router } from '@angular/router';
import { ISale } from '../_models/sale';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  modalRef: NgbModalRef;
  searchForm: FormGroup;
  clients: IClient[];
  sales: ISale[];
  submitted = false;
  id: 0;
  totalItens: 0;
  isResult = false;

  pagination = {
    totalItems: 0,
    quantidadePagina: 3,
    pagina: 1
  };

  constructor(
    private clientService: ClientService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      nome: ['', null],
      cpf: ['', Validators.minLength(11)]
    });
    this.search();
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

  openModal(content, id: number) {
    this.clientService.findSales(id).pipe(
      map(val => {
          this.sales = val;
        })
    ).subscribe();
    this.modalService.open(content, { size: 'lg' });
  }

  getPage(page) {
    this.pagination.pagina = page;
    this.search();
  }
}

