import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  personList = new Subject<any[]>()
  constructor(private readonly httpClient : HttpClient) { }

  get():Observable<any>{
    return this.httpClient.get<any>('url');
  }

  emitPersonList(personList : any[]){
    this.personList.next(personList)
  }
}
