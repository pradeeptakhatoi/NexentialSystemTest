import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/user/';

  getUser() {
    return this.http.get<User[]>(this.baseUrl);
  }

  deleteUser(id: number) {
    return this.http.delete<User[]>(this.baseUrl + id);
  }

  createUser(employee: User) {
    return this.http.post(this.baseUrl, employee);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + id);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + user.id, user);
  }
}
