import { Component, numberAttribute, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-produto-component',
  imports: [FormsModule],
  templateUrl: './editar-produto-component.html',
  styleUrl: './editar-produto-component.css',
})
export class EditarProdutoComponent implements OnInit{

  titulo="Edição de produto"

  produto: Produto = {} as Produto;

  constructor(private service: ProdutoService, private router: Router, private route: ActivatedRoute){
    this.produto.id = Number(this.route.snapshot.params["id"]);
    service.getProduto(this.produto.id).subscribe((produto) => {this.produto = produto});
  }
  
  ngOnInit(): void {}

  cancelar(): void{
    this.router.navigate(["produto"]);
  }

  alterar(): void{
    this.service.alterar(this.produto).subscribe(()=>{
      this.router.navigate(["/produto"])
    });
  }
}
