import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { HomeComponent } from './front/home/home.component';
import { EspaceCandidatComponent } from './front/espace-candidat/espace-candidat.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule, DatePipe} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DataTablesModule} from "angular-datatables";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxPaginationModule} from "ngx-pagination";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgToastModule} from "ng-angular-popup";
import {NgxMultipleDatesModule} from "ngx-multiple-dates";
import {MatDialogModule} from "@angular/material/dialog";
import {NgxEchartsModule} from "ngx-echarts";
import {MatIconModule} from "@angular/material/icon";
import * as echarts from 'echarts/core';
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './component/login/login.component';
import { SpinnerComponent } from './component/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EspaceCandidatComponent,
    LoginComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatDatepickerModule,
    DataTablesModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule ,
    MatNativeDateModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    NgToastModule,
    NgxMultipleDatesModule ,
    MatNativeDateModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [

    HttpClient,

    [DatePipe]
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
