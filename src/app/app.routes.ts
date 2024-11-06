import { Routes } from '@angular/router';

import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CadastroComponent } from './components/tela-de-cadastro/tela-de-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CozinhaComponent } from './components/cozinha/cozinha.component';

export const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'cozinha', component: CozinhaComponent },
];
