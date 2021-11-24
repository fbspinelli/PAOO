import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ClienteService } from "../cliente.service";

@Component({
  selector: 'app-cadastro-recomendacao',
  templateUrl: './cadastro-recomendacao.component.html',
  styleUrls: ['./cadastro-recomendacao.component.css']
})
export class CadastroRecomendacaoComponent implements OnInit {

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
  }

  onAdicionarRecomendacao(form: NgForm){
    if (form.invalid) return;
    this.clienteService.adicionarRecomendacao(form.value.recomendacao)
    form.resetForm()
  }

}
