import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { catchError } from 'rxjs/operators';
import { Pet } from './pet';

const httpOptions = {
  headers: new HttpHeaders({
      token: '1234'
    })
};
// ERROR al crear un header con mas de un parametro
// const httpOptions = {
//   headers: new HttpHeaders().set('Content-Type' , 'application/json').append('Authorization' , 'my-auth-token').append('token' , '1234')
// };

@Injectable()
export class PetsService {
  petsUrl = 'http://localhost:8080/25/mascota'; // URL to web api

  constructor(  private http: HttpClient ) {
  }

  /** GET Pets from the server */
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>( this.petsUrl, httpOptions ).pipe( catchError ( (err: any) => Observable.of([]) )
          );
  }

  // /** POST: add a new Pet to the database */
  // addHero (hero: Hero): Observable<Hero> {
  //   returnthis.http.post<Hero>( this.heroesUrl, hero, httpOptions).pipe( catchError((err: any) => {return Observable.of(hero)})
  //   );
  // }
}
