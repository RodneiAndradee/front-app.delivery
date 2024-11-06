import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


interface Pedido {
  id: string;
  customer: string;
  details: string;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  imports: [CommonModule]
})
export class PedidosComponent {
  pedidos: Pedido[] = [
    { id: '#24227', customer: 'C05', details: 'Ver detalles' },
    { id: '#24228', customer: 'C06', details: 'Ver detalles' },
    { id: '#24229', customer: 'C07hv', details: 'Ver detalles' }
  ];
}
