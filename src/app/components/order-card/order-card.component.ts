import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderService, OrderStatus, OrderWithId } from '../../services/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OrderCardComponent {
  @Input() order!: OrderWithId;
  @Input() userId: number | null = null;
  @Output() statusUpdated = new EventEmitter<void>();

  constructor(
    private orderService: OrderService
  ) {}

  updateOrderStatus (orderId: number, status: OrderStatus) {
    this.orderService.updateOrder(orderId, { status }).subscribe(() => {
      this.statusUpdated.emit();
    });
  }
}
