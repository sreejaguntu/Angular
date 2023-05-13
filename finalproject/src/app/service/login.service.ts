import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions:any;
  status:boolean=false;
  
  constructor(private http:HttpClient) { }
  
  loginstatus():boolean{
  return this.status;
  }
  
  getUsersList():Observable<any>{
  return this.http.get("http://localhost:2000/UserData")
  }
  
  //To post user data while signing up...
  
  newuser(data:any):Observable<any>{
    this.httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    })
    return this.http.post("http://localhost:2000/UserData",data,this.httpOptions);
  }
}
