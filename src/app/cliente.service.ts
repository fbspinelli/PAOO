import { Injectable } from "@angular/core";
import { Recomendacao } from "./recomendacao.model";
import { Subject } from "rxjs";


@Injectable ({
  providedIn: 'root'
})

export class ClienteService{
  private listaRecsAtualizada = new Subject <Recomendacao[]> (); //cria um objeto observável
  private recomendacoes: Recomendacao[] = []; //declara lista vazia

  constructor (){
  }

  getRecomendacoes(): void{
    this.listaRecsAtualizada.next([...this.recomendacoes])// não devolvo a lista original e sim uma cópia. Isso é OPERADOR SPREAD "..."
  }

  adicionarRecomendacao (recomendacao: string){
    const newRec: Recomendacao = {
      recomendacao//isso é igual a nome:nome é um atalho
    }
    this.recomendacoes.push(newRec);
    this.listaRecsAtualizada.next([...this.recomendacoes]); //notifica todos que tiverem olhando para ele
  }

getListaDeRecsAtualizadaObservable(){
  return this.listaRecsAtualizada.asObservable();
}

}
