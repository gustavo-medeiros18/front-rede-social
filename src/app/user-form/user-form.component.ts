import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = {
    username: 'spongebob',
    password: 'Password1!',
    email: 'spongebob@email.com',
  };

  constructor(private service: UserService) {}

  /**
   * O método subscribe() serve para "inscrever" um observador no Observable
   * retornado pelo método UserService.create(). Dessa maneira, pode-se receber
   * e tratar os dados emitidos pelo Observable, que aqui, trata-se do usuário
   * criado ou de um erro.
   */
  ngOnInit(): void {
    this.service.create(this.user).subscribe(
      (user) => console.log(user),
      (error) => console.log(error)
    );
  }
}
