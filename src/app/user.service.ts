import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://api.github.com/users');
  }

  getUser(login: string) {
    return this.http.get<User>(`https://api.github.com/users/${login}`);
  }
}
