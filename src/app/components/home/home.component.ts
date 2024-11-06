import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';


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


export class HomeComponent implements OnInit{
  menuItems: MenuItem[] = [
    { id: 1, name: 'Hambúrguer Clássico', price: 35.00, image: '/burger.jpg' },
    { id: 2, name: 'Frango', price: 32.00, image: '/chicken.jpg' },
    { id: 3, name: 'Torta de Maçã', price: 18.00, image: '/apple-pie.jpg' },
    { id: 4, name: 'Canapés de Salmão', price: 20.00, image: '/salmon.jpg' },
    { id: 5, name: 'Salada de Quinoa', price: 16.00, image: '/quinoa.jpg' }
  ];

  userId: string = '';
  cartCount: number = 0;
  showSuccessModal: boolean = false;
  itensPedido: ItemPedido[]=[];

  constructor(
    private route: ActivatedRoute,
    private routi: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
    });
  }

  toggleCart(item: MenuItem) {
    const index = this.itensPedido.findIndex(pedidoItem => pedidoItem.id === item.id)

    if (index !== -1) {
      this.itensPedido.splice(index, 1)
      this.cartCount--
    } else {
      this.itensPedido.push(item)
      this.cartCount++
    }
  }

  isInCart(item: MenuItem): boolean {
    return this.itensPedido.some(pedidoItem => pedidoItem.id === item.id)
  }

  closeModal() {
    this.showSuccessModal = false;
    this.itensPedido = [];
    this.cartCount = 0;
    this.routi.navigate(['/status']);
  }

  fazerPedido(){
    // Enviar pedido para o backend
    this.showSuccessModal = true;
  }
}
