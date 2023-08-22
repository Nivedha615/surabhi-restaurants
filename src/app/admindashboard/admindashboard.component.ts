import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditmenuComponent } from '../editmenu/editmenu.component';
import { menu } from '../models/menu';
import { RouterService } from '../services/router.service';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  Menu: Array<menu>=[];
  //formValue !:FormGroup
  constructor(private routerService : RouterService,private router:Router,private dialog:MatDialog) {
    console.log(this.Menu);
  
  routerService.getBooks().subscribe(res=>{
    const res1=res.map(data=>{
      return{
        id:data.id,
        name:data.name,
        description:data.description,
        type:data.type,
        cuisine_name: data.cuisine_name,
        price : data.price,
        consumable : data.consumable,
        
        images :"assets/"+ data.images,
        qnt:data.qnt
      }
    })
      this.Menu= [...res1];
    })
   }


  ngOnInit(): void {
  }
  // openDialog() {
  //   this.dialog.open(AddfoodComponent,{
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='save'){
  //       this.routerService.getBooks();
  //     }
  //   })
  // }
  
  delete(book:menu){
    //this.userservice.deleteBook(book.id).subscribe(res=>{window.location.reload()});
    this.routerService.deleteMenu(book)
    //.subscribe(res=>{window.location.reload()});
    .subscribe(res=>{
      alert("Deleted successfully");
     
      this.router.navigate(['admindashboard']);

    },err=>{
      alert("something went wrong");
    })
  }

  edit(Menu:menu){
    // this.router.navigate(['editmenu',Menu.id]);
    // this.formValue.controls['name'].setValue(Menu.name);
    //  this.formValue.controls['description'].setValue(Menu.description);
    //  this.formValue.controls['type'].setValue(Menu.type);
    //   this.formValue.controls['cuisine_name'].setValue(Menu.cuisine_name);
    //   this.formValue.controls['price'].setValue(Menu.price);
    //  this.formValue.controls['consumable'].setValue(Menu.consumable);
    //  this.formValue.controls['images'].setValue(Menu.images);

    //this.Menu.name=this.formValue.value.name;
  

  }
   onedit(menu:any){
     this.dialog.open(EditmenuComponent,{
 
     data:menu
     }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.routerService.getBooks();
       }
    })
  }
  
  

}
