import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type OrderStatus =  'aprovacao' | 'preparando' | 'enviado' | 'entregue' | 'cancelado';

export interface Order {
  id?: number;
  user: {
    id: number,
    name?: string,
    address?: string,
  };
  dishes: {
    id: number,
    name?: string,
    price?: number,
    description?: string,
  }[];
  status: OrderStatus;
  totalAmount: number;
}

export interface OrderWithId extends Order {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    return this.http.post<OrderWithId>(this.apiUrl, order);
  }

  getOrdersByStatus(statuses: OrderStatus[]): Observable<OrderWithId[]> {
    const statusParams = statuses.map(status => `status=${status}`).join('&');
    return this.http.get<OrderWithId[]>(`${this.apiUrl}?${statusParams}`);
  }

  getOrdersByUserId(userId: number): Observable<OrderWithId[]> {
    return this.http.get<OrderWithId[]>(`${this.apiUrl}?userId=${userId}`);
  }

  getAllOrders(): Observable<OrderWithId[]> {
    return this.http.get<OrderWithId[]>(this.apiUrl);
  }

  updateOrder(orderId: number, order: Partial<Order>): Observable<OrderWithId> {
    return this.http.put<OrderWithId>(`${this.apiUrl}/${orderId}`, order);
  }
}
