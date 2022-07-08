import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../_service/auth.service'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router ) { }

  ngOnInit(): void {

}

}
