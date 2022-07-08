import { Component, OnInit } from '@angular/core';
import {OrderdetailsService} from '../_service/orderdetails.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
FoodData:any;
  constructor(private service:OrderdetailsService) { }

  ngOnInit(): void {
    this.FoodData = this.service.foodDetails;
  }
  images = ['../../assets/banner6.jpg','../../assets/banner8.jpg','../../assets/biryani.jpg']
}
