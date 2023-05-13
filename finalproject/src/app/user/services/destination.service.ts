import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http:HttpClient) { }

  getDestination():Observable<any> {
     return this.http.get("http://localhost:2000/destinations");

  }
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:2000/description/"+id)
  }
  
  getDestinationById(id:number):Observable<any>{
      return this.http.get("http://localhost:2000/destinations/"+id)
  }
}
