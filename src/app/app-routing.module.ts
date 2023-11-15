import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './front/header/header.component';
import { HomeComponent } from './front/home/home.component';
import { EspaceCandidatComponent } from './front/espace-candidat/espace-candidat.component';

import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'espace', component: EspaceCandidatComponent },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' },
  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
