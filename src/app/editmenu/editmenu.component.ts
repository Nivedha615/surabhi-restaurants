import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { menu } from '../models/menu';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {
 // Menu: Array<menu>=[];
 menuForm!:FormGroup
  Menu:menu = new menu();
  constructor(private routerService : RouterService,private formBuilder:FormBuilder,private http:HttpClient,private dialog:MatDialogRef<EditmenuComponent>,
    @Inject(MAT_DIALOG_DATA) public onedit :any) { }
  // id=new FormControl('');
  //    menuForm = new FormGroup(
  //     {
  //       Name: new FormControl(''),
  //       Price: new FormControl(''),
  //       Description:new FormControl(''),
  //       Type:new FormControl(),
  //        Id:new FormControl(''),
  //        Cuisine:new FormControl(''),
  //        Quantity:new FormControl(''),

  //      }
  //   )

  ngOnInit(): void {
    this. menuForm=this.formBuilder.group(
      {
        // ID:[],
        // Id:[],
        // Name:[''],
        // Price:[''],
        // Description:[''],
        // Type:[''],
        // Cuisine:[''],
        // Quantity:[''],
        name:['',[Validators.required]],
        description:['',[Validators.required]],
        type:['',[Validators.required]],
        cuisine_name:['',[Validators.required]],
        price:['',[Validators.required]],
        consumable:['',[Validators.required]],
        images:['',[Validators.required]]
      }
    )
    if(this.onedit){
      //this.action="update";
      this.menuForm.controls['name'].setValue(this.onedit.name);
      this.menuForm.controls['description'].setValue(this.onedit.description); 
      this.menuForm.controls['type'].setValue(this.onedit.type);
      this.menuForm.controls['cuisine_name'].setValue(this.onedit.cuisine_name);
      this.menuForm.controls['price'].setValue(this.onedit.price);
      this.menuForm.controls['consumable'].setValue(this.onedit.consumable);
      this.menuForm.controls['images'].setValue(this.onedit.images);
    }
    

  }
  update(){
    this.routerService.updateMenu(this.menuForm.value,this.onedit.id)
  .subscribe({
    next:(res)=>{
      alert("updated sucessfully");
      this.menuForm.reset();
      this.dialog.close('update');
    },
    error:()=>{
      alert("Error while updating the records");
    }
  })
}

  }


