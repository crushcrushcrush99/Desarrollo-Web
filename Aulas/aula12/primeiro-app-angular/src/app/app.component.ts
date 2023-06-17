import { Component } from '@angular/core';
import Pessoa from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    this.listaPessoas.push(new Pessoa("Fulano", 23, "DEV .NET"));
    this.listaPessoas.push(new Pessoa("Ciclano", 42, "DEV Android"));
    this.listaPessoas.push(new Pessoa("Fulana", 27, "Devops Engineer"));

    console.log(this.listaPessoas)
  }

  public listaPessoas: Pessoa[] = new Array<Pessoa>();

  /*public mensagem: string = 'Olá angular!'
  public nome: string = 'Fulano';
  public idade: number = 20;
  public profissao: string = 'DEV Javascript';*/

    //var pessoa = new Pessoa("Fulano", 20, "DEV Java");
  

  /*public listaAnimais= [{ id: "647a4abf12fa138b869b823e", nome: "Rodolfo", idade: "2"},
                        { id :"648a35e837f87a29c49a9870", nome: "Monona"},
                        { id: "648a35f937f87a29c49a9874", nome: "Hinata"},
                        { id: "648a35fa37f87a29c49a9876", nome: "Coqui"},
                        { id: "648a35fa37f87a29c49a9878", nome: "Blacki"}
  ];*/

  //public listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
