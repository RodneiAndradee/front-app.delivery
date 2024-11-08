import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface User {
  id?: number;
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService{
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

}
