import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CozinhaComponent {
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
      status: 'Fila de Espera'
    }
  ];
}
