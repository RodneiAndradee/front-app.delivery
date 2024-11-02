import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './tela-de-cadastro.component.html',
  styleUrls: ['./tela-de-cadastro.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})

export class CadastroComponent {
  user: User = {
    name: '',
    endereco: '',
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }
}