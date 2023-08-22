import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private routerService:RouterService) { }

  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
   }
)
// async login(){
//   console.log("Form Login",);
//   this.user.username = this.loginForm.value.username;
//   this.user.password = this.loginForm.value.password;
//   let validData:boolean = false;
//   await this.routerService.getUsers()
//   .subscribe(data => {
//     data.forEach(mydata => {
//       if(mydata.username === this.user.username && mydata.password === this.user.password){
//         // console.log("inside treu");
        
//         // validData = true;
//         this.routerService.storeName(this.user.username);
//        // this.routerService.usermenu(this.loginForm.value.username);
//        this.router.navigate(['usermenu'])
//       }

//   })})
// }
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


ngOnInit(): void {
 this.loginForm=this.formBuilder.group({
   username:[''],
   password:['']
 })
}
login(){
  
  this.http.get<any>("http://localhost:3000/Users")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        
        return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
        console.log(user);
        
      });
      if(user){
       // alert("Login SuccessFully!!");
       // this.loginForm.reset();
       this.routerService.storeName(this.loginForm.value.username)
     
         this.router.navigate(['usermenu'])
      }
      else{
        console.log(user);
        alert("User Not Found!!")
      }
    
    
    },err=>{
      alert("Something Went Wrong!!")
    })
    
  }
  register(){
    this.router.navigate(['register'])
  }

}
