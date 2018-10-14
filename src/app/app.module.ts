import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

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
import { ChartService } from './_services/chart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    GoogleChartsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    ClientService,
    ChartService,
    ErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
