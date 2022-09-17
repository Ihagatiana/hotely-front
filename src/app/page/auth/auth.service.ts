import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(): Observable<any> {
    throw new Error('method not implemented');
  }

  signOut(): Observable<any> {
    throw new Error('method not implemented');
  }
}
