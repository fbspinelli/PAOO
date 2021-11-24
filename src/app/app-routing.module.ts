import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroRecomendacaoComponent } from './cadastro-recomendacao/cadastro-recomendacao.component';
import { ListaRecomendacoesComponent } from './lista-recomendacoes/lista-recomendacoes.component';

const routes: Routes = [
  {path: 'criar', component: CadastroRecomendacaoComponent },
  {path: 'listar', component: ListaRecomendacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //importa o vetor acima para esse modulo
  exports: [RouterModule] //da acesso a essas diretivas por outros modulos
})
export class AppRoutingModule { }
