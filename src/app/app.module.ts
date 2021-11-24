import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListaRecomendacoesComponent } from './lista-recomendacoes/lista-recomendacoes.component';
import { CadastroRecomendacaoComponent } from './cadastro-recomendacao/cadastro-recomendacao.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListaRecomendacoesComponent,
    CadastroRecomendacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // roteamento
    BrowserAnimationsModule, //animações material
    MatToolbarModule, //cabeçalho
    MatIconModule, // icones
    FormsModule, //modulo pro form
    MatFormFieldModule, //usado no inserir
    MatCardModule, // usado no cartão inserir
    MatInputModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
