import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomList = new Subject<any[]>()
  constructor(private readonly httpClient : HttpClient) { }

  get(): Observable<any>{
    return this.httpClient.get<any>('url');
  }
  
  emitRoomList(roomList : any[]){
    this.roomList.next(roomList)
  }
}
