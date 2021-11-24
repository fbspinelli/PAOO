import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ClienteService } from "../cliente.service";
import { Subscription } from 'rxjs';
import { Recomendacao } from '../recomendacao.model';

@Component({
  selector: 'app-lista-recomendacoes',
  templateUrl: './lista-recomendacoes.component.html',
  styleUrls: ['./lista-recomendacoes.component.css']
})
export class ListaRecomendacoesComponent implements OnInit, OnDestroy {

  constructor(private clienteService: ClienteService) {
    //a documentação recomenda que no construtor tenha somente injetor de dependências
  }

  recomendacoes: Recomendacao[] = [];

  private recomendacoesSubscription: Subscription; //cria objeto que "esculta"


  ngOnInit(): void {
    console.log(JSON.stringify(this.recomendacoes) + "antes")
    this.recomendacoesSubscription = this.clienteService.getListaDeRecsAtualizadaObservable().subscribe((recomendacoes: Recomendacao[]) => {
      this.recomendacoes = recomendacoes
      console.log(this.recomendacoes)
    })
    this.clienteService.getRecomendacoes();
  }

  ngOnDestroy(): void{
    this.recomendacoesSubscription.unsubscribe()
  }

}
