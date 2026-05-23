import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto-service';
import { Produto } from '../../services/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-component',
  imports: [],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css',
})
export class ProdutoComponent implements OnInit{

  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router){ }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.listaProdutos = produtos
    });
  }
}
