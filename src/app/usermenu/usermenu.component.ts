import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { menu } from '../models/menu';
import { HotelService } from '../services/hotel.service';
import { RouterService } from '../services/router.service';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {
  //[x: string]: any;
  Menu: Array<menu>=[];

  public cartItems = [];
 
  total:any=0;
  //public qnt=0;
  
  constructor(private routerService : RouterService,private hotelService: HotelService,private httpClient : HttpClient) {
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
   itemsCart:any=[];
   addlist(cart:menu){
     console.log(cart);
     let cartDataNull =localStorage.getItem('localCart');
     if(cartDataNull==null){
       let storeDataGet:any=[];
       storeDataGet.push(cart);
       localStorage.setItem('localCart',JSON.stringify(storeDataGet));
     }
     else{
       var id=cart.id;
       let index:number=-1;
       //this.itemsCart=JSON.parse(localStorage.getItem('localCart'));
     }
     localStorage.setItem('localCart',JSON.stringify(cart));
     this.hotelService.addToWishlist(cart);
     this.httpClient.post<any>( "http://localhost:3000/TodayBill",cart)
     this.httpClient.post<any>( "http://localhost:3000/MonthlyBill",cart)
     alert("Added to cart")
 }
 inc(Menu:menu){
  Menu.qnt=Menu.qnt+1;
 }
 dec(Menu:menu){
   Menu.qnt=Menu.qnt+1;
 }
 

 
//    addToMyCart = (menu: { id: any; name: any; price: any; }) => {
//     const newItem = {
//        "id": menu.id,
//     "name": menu.name,
//        "price": menu.price,
//       "quantity": 1
//    }
//     if(this.isItemAlreadyExist(newItem)) {
//       //this.itemAlreadyExistModal(newItem);
//      }
//      else {
//        this.addItemToMyCart(newItem);
//        this.itemAddedModal(newItem);
//        this.calculateAmount();
//      }
//    }
//  addItemToMyCart = (newItem: { id: any; name: any; price: any; quantity: number; }) => {
//     this.hotelService.setCartItem(newItem);
//     this.cartItems = this.hotelService.cartItems;
//   }

//   isItemAlreadyExist = (newItem: { id: any; name?: any; price?: any; quantity?: number; }) => {
//      return this.hotelService.cartItems.find((cartItem) => cartItem.id == newItem.id);
//    }
  // itemAlreadyExistModal = (newItem) => {
  //   Swal.fire({
  //     icon: 'warning',
  //     title: `${newItem.name} is already exist in your basket!`,
  //     showConfirmButton: true,
  //     showCancelButton: true,
  //     confirmButtonColor: '#9c27b0',
  //     confirmButtonText: 'View My Basket',
  //     cancelButtonText: 'Close',
  //     cancelButtonColor: '#e23c3c'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.toggleSideNav();
  //     }
  //   });
  // }
  // calculateAmount = () => {
  //   this.totalAmount = 0; 
  //   this.cartItems.map((item) => {
  //     this.totalAmount = this.totalAmount + (item.quantity*item.price)
  //   });
  // }

  ngOnInit(): void {
  }

}
