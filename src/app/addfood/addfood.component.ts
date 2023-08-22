import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  constructor(private formBuilder:FormBuilder ,private http:HttpClient,private router:Router) { }
 // id=new FormControl('');
  editForm = new FormGroup(
   {
    Name: new FormControl(''),
    Price: new FormControl(''),
    Description:new FormControl(''),
    Type:new FormControl(),
     //Id:new FormControl(''),
     cuisine_name:new FormControl(''),
     consumable:new FormControl(''),
     images:new FormControl(''),
     qnt:new FormControl('')
    
     
   }
 )
  ngOnInit(): void {
    this. editForm=this.formBuilder.group(
      {
        // ID:[],
        
        name:[''],
        description:[''],
        Type:[''],
        cuisine_name:[''],
        price:[''],
        consumable:[''],
        images:[''],
        
        
        
        
       
      }
    )

  }
  Submit (){
    this.http.post<any>( "http://localhost:3000/Menu",this. editForm.value)
      .subscribe(res=>{
        alert("registerd successfully");
        this. editForm.reset();
        this.router.navigate(['admindashboard']);
  
      },err=>{
        alert("something went wrong");
      })
    
  }

}
