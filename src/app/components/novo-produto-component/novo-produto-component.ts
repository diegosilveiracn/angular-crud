import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutoService } from '../../services/produto-service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-novo-produto-component',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './novo-produto-component.html',
  styleUrl: './novo-produto-component.css',
})
export class NovoProdutoComponent implements OnInit {
  
  titulo = "Novo Produto";

  produto: Produto = {} as Produto;

  constructor(private service: ProdutoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {}

  cancelar(): void{
    this.router.navigate(["produto"]);
  }

  salvar(): void{
    this.service.adicionar(this.produto).subscribe(()=>{this.router.navigate(["/produto"])});
  }
}
