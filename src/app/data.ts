import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private http: HttpClient) {}

  getData(apiUrl: string) {
    return this.http.get(apiUrl);
  }
  
}
