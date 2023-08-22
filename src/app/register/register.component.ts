import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder ,private http:HttpClient,private router:Router) { }
  id=new FormControl('',[Validators.required]);
  registerForm = new FormGroup(
   {
     username: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required,Validators.minLength(6)]),
     Email:new FormControl('', [Validators.required, Validators.email]),
     Phone:new FormControl(),
      id:new FormControl('',[Validators.required]),
      type:new FormControl()
    
     // ID:new FormControl('',[Validators.required])
     
   }
 )
 register(){
  console.log("Form Login",this. registerForm.value.username);
  console.log("Form Login",this. registerForm.value.Email);
  this.http.post<any>( "http://localhost:3000/Users",this. registerForm.value)
  .subscribe(res=>{
    alert("registerd successfully");
    this. registerForm.reset();
    this.router.navigate(['userlogin']);

  },err=>{
    alert("something went wrong");
  })
}
  ngOnInit(): void {
    this. registerForm=this.formBuilder.group(
      {
        // ID:[],
        id:[],
        username:[''],
        Email:[''],
        password:[''],
        Phone:[''],
        type:['']
      }
    )
  }
  getEmail(){
    return this. registerForm.get('Email');
  }
  getUserName(){
    return this. registerForm.get('username');
  }
  getPassword(){
    return this. registerForm.get('password');
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
        return " Password can not be less the 6 char"
      }
      else{
        return ""
      }
    }else{
      return ""
    }
  }
  getErrorMessage1() {
    if (this.getEmail()?. hasError('required') ) {
      return 'You must enter a value';
    }

    return this.getEmail() ? 'Not a valid email' : '';
  }


}
