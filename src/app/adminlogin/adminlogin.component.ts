import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/login';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user: User = new User();
  constructor(private formBuilder:FormBuilder,private routerService : RouterService,private router:Router,private http:HttpClient) { }
  // userData : Array<User>=[
  //      {
  //       "username":"admin",
  //       "password":"password"
  //       }
  //     ];
     loginForm = new FormGroup(
         {
           username: new FormControl('',[Validators.required]),
           password: new FormControl('',[Validators.required,Validators.minLength(6)])
        }
     )
     getUserName(){
      return this.loginForm.get('username');
    }
    getPassword(){
      return this.loginForm.get('password');
    }
     getUserNameErrorMsg(){
      if(this.getUserName()?.invalid && (this.getUserName()?.dirty || this.getUserName()?.touched)){
        return "User Name should not be blank"
      }else{
        return "";
      }
    }
    getPasswordErrorMsg(){
      if(this.getPassword()?.invalid &&(this.getPassword()?.dirty || this.getPassword()?.touched)){
        if(this.getPassword()?.hasError('required')){
          return "Password can not be blank"
        }
        else if(this.getPassword()?.hasError('minlength')){
          return "Password can not be less the 6 char"
        }
        else{
          return ""
        }
      }else{
        return ""
      }
    }
    login(){
      // this.user.username=this.loginForm.value.username;
      // this.user.password=this.loginForm.value.password;
      // for(let i=0; i<this.userData.length; i++){
      //   if(this.userData[i].username===this.user.username && this.userData[i].password === this.user.password)
      //   {
      //     console.log("User found",this.userData[i]);
      //     this.router.navigate(['admindashboard'])
          
      //   }
      // }
      this.http.get<any>("http://localhost:3000/Users")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
        console.log(user);
        
      });
      if(user){
       // alert("Login SuccessFully!!");
       // this.loginForm.reset();
     
         this.router.navigate(['admindashboard'])
      }
      else{
        console.log(user);
        alert("User Not Found!!")
      }
    
    
    },err=>{
      alert("Something Went Wrong!!")
    })
    }
    
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  register(){
    this.router.navigate(['adminregister'])
  }


}
