import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../../model/User';

@Injectable({
  providedIn: 'root',
})
export class StudentLoginService {
  readonly BASE_URL = 'http://localhost:8081/api';

  isUserLoggedIn: boolean = false;
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.isValidSession();
  }

  // perform_login(username: string, password: string): Observable<any>;
  perform_login(username: string, password: string): Observable<User> {
    let u = new User(username, password);
    // console.log('In perform_login 2');
    return this.http.post<User>(`${this.BASE_URL}/login`, u);
    // if (username == 'admin' && password == 'admin') {
    //   this.isUserLoggedIn = true;
    //   this.createSessionAndStoreValue(username, true);
    // } else {
    //   this.isUserLoggedIn = false;
    //   this.createSessionAndStoreValue('guest', false);
    // }
    // return this.isUserLoggedIn;
  }
  // Following methods are for maintaining the session of the user
  public createSessionAndStoreValue(username: string, isUserLoggedIn: boolean) {
    sessionStorage.setItem('isUserLoggedIn', isUserLoggedIn + '');
    sessionStorage.setItem('username', username);
    this.isUserLoggedIn = true;
    console.log('In createSession :' + sessionStorage.getItem('username'));
  }

  public isValidSession() {
    let username = sessionStorage.getItem('username');
    console.log('(In isValidar ) username: ' + username);
    if (username == 'guest' || username == null) {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = true;
    }
  }
  public logout() {
    console.log('In student-login logout()');
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('username');
    this.isUserLoggedIn = false;
  }
}
