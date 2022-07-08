import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:any; Phonenumber!:number; Password:any;
   IsClicked:boolean=false;
  IsAdd:boolean =false;
  errmsgShow = false;
  errmsg!:string;
  constructor(private formBuilder:FormBuilder, private ResService:ServiceService,private router:Router) {
    
   }

//form data mapping

  ngOnInit(){
    this.LoginForm = new FormGroup({
      Phonenumber: new FormControl(""),
      Password: new FormControl("")
    });
   
    this.LoginForm=this.formBuilder.group({
      Phonenumber:['',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      Password:['',[Validators.required,Validators.minLength(6)]]
      });
  }
  get check() {
    return this.LoginForm.controls;
 }
 OnLogin(data:any){
  if(this.LoginForm.valid)
  {
   console.log(this.LoginForm.value);
   //call api signup
  this.ResService.loginUser(data).subscribe(
    (res)=>{
      console.log(res,'res##');
      //store data in local storage
      localStorage.setItem('token',res.token);
      localStorage.setItem('Username',res.Username);
    if(res.Phonenumberstatus == true){
       alert("Invalid Phonenumber");
    }else if(res.Passwordstatus == true){
      alert("Invalid Password");
    }else{
      alert("Login successful..!");
      this.router.navigate([""]);
    }
      
    });
  }else{
    return ;
  }

  
   }

    
}


