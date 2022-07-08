import { Component, OnInit } from '@angular/core';
import{OrderdetailsService} from '../../app/_service/orderdetails.service'
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   FoodData:any;
  constructor(private service:OrderdetailsService, private auth:AuthService) { 
    this.FoodData = this.service.foodDetails;


  }
  IsLoggedin(){
    this.auth.isLoggedIn();
  }
    
  ngOnInit(): void {
  }

}
