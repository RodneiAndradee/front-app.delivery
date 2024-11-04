import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";


export interface User {
    id?: number;
    name: string;
    endereco: string;
  }


@Injectable({
    providedIn: 'root'
  })

  export class UserService{
    private apiUrl = 'http://localhost:8080/user';

    constructor(private http: HttpClient) {}

    createUser(user: User): Observable<User> {
      // return this.http.post<User>(this.apiUrl, user);
      return of({
        id: Math.floor(Math.random() * 100),
        ...user,
      }).pipe(delay(1000));
    }

  }
