import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../services/produto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-component',
  imports: [],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css',
})
export class ProdutoComponent implements OnInit{

  titulo = "Produtos";

  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router){ }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.listaProdutos = produtos
    });
  }

  novo(): void{
    this.router.navigate(["novoProduto"]);
  }

  editar(id:number): void{
    this.router.navigate(["editarProduto/"+id]);
  }
  
  excluir(id: number): void {
    this.produtoService.excluir(id).subscribe(() => {
        this.listaProdutos = this.listaProdutos.filter(p => p.id !== id);
    });
  }
} 