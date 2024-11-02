import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
} 

type ItemPedido = Omit<MenuItem, "image">

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule]
})


export class HomeComponent{
  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Hambúrguer Clássico',
      price: 35.00,
      image: '/assets/burger.jpg'
    },
    {
      id: 2,
      name: 'Frango',
      price: 32.00,
      image: '/assets/chicken.jpg'
    },
    {
      id: 3,
      name: 'Torta de Maçã',
      price: 18.00,
      image: '/assets/apple-pie.jpg'
    },
    {
      id: 4,
      name: 'Canapés de Salmão',
      price: 20.00,
      image: '/assets/salmon.jpg'
    },
    {
      id: 5,
      name: 'Salada de Quinoa',
      price: 16.00,
      image: '/assets/quinoa.jpg'
    }
  ];

  cartCount: number = 0;
  itensPedido: ItemPedido[]=[];


  addToCart(item: MenuItem) {
    this.cartCount++;
    this.itensPedido.push(item)
  }

  fazerPedido(){
    console.log(this.itensPedido)
  }
}
