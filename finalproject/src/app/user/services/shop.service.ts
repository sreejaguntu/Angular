import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  getFunctions():Observable<any> {
     return this.http.get("http://localhost:2000/functions");

  }
  
  getFunctionsById(id:number):Observable<any>{
      return this.http.get("http://localhost:2000/functions/"+id)
  }

  getTypes():Observable<any> {
    return this.http.get("http://localhost:2000/types");

  }
 
  getTypesById(id:number):Observable<any>{
     return this.http.get("http://localhost:2000/types/"+id)
  }

  getTrending():Observable<any> {
    return this.http.get("http://localhost:2000/trending");
  }
 
  getTrendingById(id:number):Observable<any>{
     return this.http.get("http://localhost:2000/trending/"+id)
  }
}
