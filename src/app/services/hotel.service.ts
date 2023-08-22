import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
 // public cartItems = [];
  //cartItemsChange: Subject<CartItem[]> = new Subject<CartItem[]>();
  public wishlistItem:any=[];
 public bookList=new BehaviorSubject<any>([]);
 public totalAmount = 0;
  constructor() { 
    //this.cartItemsChange.subscribe((value: CartItem[]) => {
      //this.cartItems.push(value);
    //});
  }
  
  getBooksItem(){
    return this.bookList.asObservable();
  }
  setBooksItem(Book:any){
    this.wishlistItem.push(...Book);
    this.bookList.next(Book);
  }
  addToWishlist(Book:any){
    this.wishlistItem.push(Book);
    this.bookList.next(this.wishlistItem);
    console.log(this.wishlistItem);
    this.getTotalPrice();
  }
  deleteWishListItem(Book:any){
    this.wishlistItem.map((a:any,index:any)=>{
      if(Book.id===a.id){
        this.wishlistItem.splice(index,1);
      }
    })
    this.bookList.next(this.wishlistItem);
  }
  // grandtotal(){
  //   let total=0;
  //   this.wishlistItem.map((a:any)=>{
  //       total +=a.total;
  //       return total;
  //     });
      getTotalPrice(): number{
        let grandtotal=0;
        this.wishlistItem.map((a:any)=>{
          grandtotal+= a.price;
        })
        return grandtotal;
      }
      removeAllCart(){
        this.wishlistItem=[]
        this.bookList.next(this.wishlistItem);
      }
  }
 

  
  

  
    
    


