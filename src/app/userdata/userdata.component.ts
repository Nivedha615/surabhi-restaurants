import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminadduserComponent } from '../adminadduser/adminadduser.component';
import { User } from '../models/login';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  users: Array<User>=[];
  constructor(private routerService : RouterService,private router:Router,private dialog:MatDialog) { 
 
  routerService.getUsers().subscribe(res=>{
    const res1=res.map(data=>{
      return{
        id:data.id,
        username:data.username,
        password:data.password,
        Email:data.Email,
        type:data.type,
        Phone:data.Phone

      }
    })
      this.users= [...res1];
    })
   }
  
  ngOnInit(): void {
    
  }
  removeItem(user:any){
    this.routerService.deleteUser(user);
    
  }
  openDialog() {
    this.dialog.open(AdminadduserComponent,{
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.routerService.getUsers();
        //this.http.post<any>( "http://localhost:3000/Users",this. registerForm.value)
      }
    })
  }
  onedit(user:any){
    this.dialog.open(AdminadduserComponent,{
 
    data:user
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.routerService.getUsers();
      }
    })
  }


}

