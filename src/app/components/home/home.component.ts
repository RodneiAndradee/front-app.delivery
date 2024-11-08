import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { Dish, DishService } from '../../services/dish.service';
import { Order, OrderService } from '../../services/order.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule]
})

export class HomeComponent implements OnInit{
  userId: string = '';
  cartCount: number = 0;
  showSuccessModal: boolean = false;
  order: Order | null = null;
  menuItems: Dish[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dishService: DishService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;

      this.order = {
        user: { id: parseInt(this.userId) },
        dishes: [],
        status: 'pending',
        totalAmount: 0
      }
    });

    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.menuItems = data;
    });
  }

  toggleCart(item: Dish) {
    if (!item.id || !this.order) return

    const dishIndex = this.order.dishes.findIndex(dish => dish.id === item.id)
    if (dishIndex !== -1)  {
      this.order?.dishes.splice(dishIndex, 1)
      this.order.totalAmount = Math.max(0, this.order.totalAmount - item.price)
      this.cartCount--
      return
    }

    this.order.dishes.push({ id: item.id })
    this.order.totalAmount += item.price
    this.cartCount++
  }

  isInCart(item: Dish): boolean {
    if (!this.order) return false
    return this.order.dishes.some(dish => dish.id === item.id)
  }

  closeModal() {
    this.showSuccessModal = false;
    this.order = null;
    this.cartCount = 0;
    this.router.navigate(['/status']);
  }

  fazerPedido(){
    this.orderService.createOrder(this.order!).subscribe(() => {
      this.showSuccessModal = true;
    })
  }
}
