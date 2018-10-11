import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { SaleComponent } from './sale/sale.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './_services/client.service';
import { ErrorHandler } from './_helpers/error-handler';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaskCpfPipe, MaskPhonePipe } from './_pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientComponent,
    SaleComponent,
    MaskCpfPipe,
    MaskPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    ClientService,
    ErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
