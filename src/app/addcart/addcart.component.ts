import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  public book:any;
  public grandTotal !:number;
  public product : any=[];
  constructor(private hotelService:HotelService,private dialog:MatDialog) { }

  
  ngOnInit(): void {
    this.hotelService.getBooksItem()
    .subscribe(res=>{
      this.book=res;
      })
    this.grandTotal=this.hotelService.getTotalPrice();
   // this.hotelService.grandtotal()
     // .subscribe(res=>this.book=res);

}
openCheck(){
  this.dialog.open(CheckoutComponent,{
  })
}
removeItem(item:any){
  this.hotelService.deleteWishListItem(item);
  
}
emptycart(){
  this.hotelService.removeAllCart();
}
getCartDetails:any=[];
total:number=0;
calculateTotal(){
  // if(localStorage.getItem('localCart')){
  //   this.getCartDetails=JSON.stringify(localStorage.getItem('localCart'));
  //   this.total=this.getCartDetails.reduce(function(acc: number,val: { price: number; qnt: number; }){
  //         return acc + (val.price * val.qnt)
  //   },0);
  // }
  
}


}
