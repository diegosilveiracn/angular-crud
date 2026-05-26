import { Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto-component/produto-component';
import { NovoProdutoComponent } from './components/novo-produto-component/novo-produto-component';
import { EditarProdutoComponent } from './editar-produto-component/editar-produto-component';

export const routes: Routes = [
    {path: "produto", component: ProdutoComponent},
    {path: "novoProduto", component: NovoProdutoComponent},
    {path: "editarProduto/:id", component: EditarProdutoComponent}
];
