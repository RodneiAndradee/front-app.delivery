import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class StatusComponent {
  constructor(
    private router: Router
  ) {}
 
 
  orders = [
    {
      id: '#24227',
      customer: 'C05',
      status: 'Preparando'
    },
    {
      id: '#24228',
      customer: 'C06',
      status: 'A Caminho'
    },
    {
      id: '#24229',
      customer: 'C07',
      status: 'Entregue'
    }
  ];

  irCozinha(){
    this.router.navigate(['/pedidos']);
  }
}
