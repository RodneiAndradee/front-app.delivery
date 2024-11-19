import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";

export interface User {
  id?: number;
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService{
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

}
