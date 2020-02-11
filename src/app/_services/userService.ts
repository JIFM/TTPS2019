import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../_models/user';



@Injectable({ providedIn: 'root' })
export class UserService {

    url = '';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.url);
    }

    register(user: User) {
        return this.http.post(this.url, user);
    }

    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
}
