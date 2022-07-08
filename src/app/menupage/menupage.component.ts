import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../_service/orderdetails.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  getMenuId: any;
  MenuData: any;
  constructor(private param: ActivatedRoute, private service: OrderdetailsService) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get("id");
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId) {
      this.MenuData = this.service.foodDetails.filter((value) => {
       return  value.id == this.getMenuId
      });
    }
  }
}


