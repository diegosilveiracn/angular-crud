import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './types';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  apiUrl = "http://localhost:8080/produtos";
  
  private http = inject(HttpClient);

  public getProdutos(): Observable<Produto[]>{
   return this.http.get<Produto[]>(this.apiUrl); 
  }
}
