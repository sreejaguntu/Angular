import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http:HttpClient) { }

  getVenues():Observable<any> {
     return this.http.get("http://localhost:2000/weddingvenues");

  }
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:2000/details/"+id);
  }
    
  getVenuesById(id:number):Observable<any>{
      return this.http.get("http://localhost:2000/weddingvenues/"+id)
  }
}
