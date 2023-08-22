import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditmenuComponent } from '../editmenu/editmenu.component';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css']
})
export class AdminadduserComponent implements OnInit {
  menuForm!:FormGroup
  action : string = "Save";
  constructor(private routerService : RouterService,private formBuilder:FormBuilder,private http:HttpClient,private dialog:MatDialogRef<EditmenuComponent>,
    @Inject(MAT_DIALOG_DATA) public onedit :any) { }

  
    ngOnInit(): void {
      this.menuForm=this.formBuilder.group({
        username:['',[Validators.required]],
        Email:['',[Validators.required]],
        type:['',[Validators.required]],
        Phone:['',[Validators.required]],
        
      });
     if(this.onedit){
       this.action="update";
       this.menuForm.controls['username'].setValue(this.onedit.username);
       this.menuForm.controls['Email'].setValue(this.onedit.Email); 
       this.menuForm.controls['type'].setValue(this.onedit.type);
       this.menuForm.controls['Phone'].setValue(this.onedit.Phone);
       
     }
    }
    adduser()
{
  if(!this.onedit){
  this.http.post<any>("http://localhost:3000/Users",this.menuForm.value).subscribe(res=>{
    alert("User added Successfully ");
    this.menuForm.reset();
    this.dialog.close('save');
  },err=>{
    alert("not added")
  } )
}else{
  this.updateItem()
  
  }
}
updateItem(){
  this.routerService.updateUser(this.menuForm.value,this.onedit.id)
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
  

