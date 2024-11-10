import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderCardComponent } from '../order-card/order-card.component'
import { OrderService, OrderWithId, OrderStatus } from '../../services/order.service';

export const statusOrdersLabels: { [key: string]: OrderStatus[] } = {
  'Cozinha': ['aprovacao'],
  'Motoboy': ['enviado'],
  'Chefe': ['preparando', 'cancelado', 'entregue'],
};

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  standalone: true,
  imports: [CommonModule, OrderCardComponent]
})
export class PedidosComponent implements OnInit{
  orderStatuses: OrderStatus[] = [];
  orders: OrderWithId[] = [];
  userId: number | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      const statusLabel = params.get('status');
      const statuses = this.getOrderStatusesFromLabel(statusLabel);

      if (!statuses && !userId) {
        this.router.navigate(['/cadastro']);
      }

      if (statuses) this.orderStatuses = statuses;
      if (userId) this.userId = parseInt(userId);

      this.loadOrders();
    })
  }

  private getOrderStatusesFromLabel(label: string | null): OrderStatus[] | undefined {
    return statusOrdersLabels[label || ''];
  }

  loadOrders () {
    if (this.userId) {
      this.orderService.getOrdersByUserId(this.userId).subscribe(orders => {
        this.orders = orders;
      });
      return
    }

    if (this.orderStatuses.length) {
      this.orderService.getOrdersByStatus(this.orderStatuses).subscribe(orders => {
        console.log(orders)
        this.orders = orders;
      });
      return
    }
  }
}
