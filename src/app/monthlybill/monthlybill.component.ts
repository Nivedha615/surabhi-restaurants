import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-monthlybill',
  templateUrl: './monthlybill.component.html',
  styleUrls: ['./monthlybill.component.css']
})
export class MonthlybillComponent implements OnInit {

  public book:any;
  public grandTotal !:number;
  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotelService.getBooksItem()
    .subscribe(res=>{
      this.book=res;
      })
    this.grandTotal=this.hotelService.getTotalPrice();
  }

}
