import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { menu } from '../models/menu';
import { User } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  //private apiurl="http://localhost:3000/Menu";
  constructor(private httpClient : HttpClient) { }
  getBooks():Observable<Array<menu>>
  {
    return this.httpClient.get<Array<menu>>('http://localhost:3000/Menu')
  }
  deleteMenu(book:menu){
    return this.httpClient.delete(`http://localhost:3000/Menu/${book.id}`);
  }
  // updateUser(user:User):Observable<any>{
  //   return this.httpClient.put(`http://localhost:3000/users/${user.id}`,user);
  // }
  updateMenu(menu:any,id:number){
    return this.httpClient.put("http://localhost:3000/Menu/"+id,menu)
  }
  
    getUsers():Observable<Array<User>>{
      return this.httpClient.get<Array<User>>('http://localhost:3000/Users')
    }
    deleteUser(book:User){
      return this.httpClient.delete(`http://localhost:3000/Users/${book.id}`);
    }
    
    updateUser(user:any,id:number){
      return this.httpClient.put("http://localhost:3000/Users/"+id,user)
    }
    storeName(name:string){
      localStorage.setItem("username",name);
    }
    getName():string|null{
      return localStorage.getItem('username');
    }
    
}
