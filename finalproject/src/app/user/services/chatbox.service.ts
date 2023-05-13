import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {


  httpOptions:any;
  constructor(private http:HttpClient){

  }
  
  postMessage(message: string, sender: string, receiver: string) {

        const data = {
    
          message: message,
    
          sender: sender,
    
          receiver: receiver
    
        };
    
        return this.http.post("http://localhost:2000/message", data,this.httpOptions);
    
      }

   getMessage():Observable<any> {
    return this.http.get("http://localhost:2000/message");

 }
}
