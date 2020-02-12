import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({  'Content-Type':  'application/json' })};


@Injectable({ providedIn: 'root' })
export class AuthService {

    private isUserLoggedIn;
    public userLogged: User;


    constructor(private http: HttpClient) {
        this.isUserLoggedIn = false;
    }

    isLogged() {
        return this.isUserLoggedIn;
    }

    setUserLoggedIn(user: User) {
        this.isUserLoggedIn = true;
        this.userLogged = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    getUser(): User {
        return this.userLogged;
    }


    login(u: User, tipo) {
        return this.http.post<User>('http://localhost:8080/25/usuario/' + tipo, u, httpOptions)
            .pipe(
                map(user => {
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user.username);
                    this.setUserLoggedIn(user);
                }
                return user;
                })
            );
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.setUserLoggedIn(null);
    }
}
