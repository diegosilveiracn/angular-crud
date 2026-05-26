import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  apiUrl = "http://localhost:8080/produto";
  
  private http = inject(HttpClient);

  public getProdutos(): Observable<Produto[]>{
   return this.http.get<Produto[]>(this.apiUrl); 
  }

  public getProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.apiUrl + "/" + id);
  }

  public adicionar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  public alterar(produto:Produto): Observable<Produto>{
    return this.http.put<Produto>(this.apiUrl, produto);
  }

  public excluir(id: number): Observable<Produto>{
    return this.http.delete<Produto>(this.apiUrl + "/" + id);
  }
}

export interface Produto{
    id : number;
    descricao : string;
    preco : number;
}