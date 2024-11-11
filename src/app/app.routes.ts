import { Routes } from '@angular/router';

import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CadastroComponent } from './components/tela-de-cadastro/tela-de-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

export const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'pedidos/:status', component: PedidosComponent },
  { path: 'pedidos/:status/:userId', component: PedidosComponent }
];
