import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }

 async Log(){
   let response = await this.http.post
 }
}

