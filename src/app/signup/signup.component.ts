import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm:any; Username!: String;Phonenumber!:Number;Email!:String;Password!:String;
  Confirmpassword!:String;
  IsClicked:boolean = false;
  IsAdd:boolean =false;
  errmsg:any;
  errmsgShow= false;
  

  constructor(private formBuilder:FormBuilder, private ResService:ServiceService, private router:Router) { }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      Username:new FormControl(""),
      Phonenumber:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      Confirmpassword:new FormControl("") 
    });

    this.SignupForm = this.formBuilder.group({
      Username:['',Validators.required],
      Phonenumber:['',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Confirmpassword:['',Validators.required]
    },
    //custom validators for matching password & confirmpassword
    {validators:this.MustMatch('Password','Confirmpassword')}
    )}
  
  get check() {
    return this.SignupForm.controls;
 }
 //method for matching password

  MustMatch(controlName:string,matchingControlName:string){
        return(formGroup:FormGroup) =>{
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if(matchingControl.errors && !matchingControl.errors['MustMatch']){
            return;
          }
          if(control.value !== matchingControl.value){
            matchingControl.setErrors({MustMatch:true});
         }else{
          matchingControl.setErrors(null);
         }
        }
  }

  OnSignup(data:any){
    this.IsClicked=true;
    if(this.SignupForm.invalid)
    {
      return ;
    }
  
    //call api signup
    this.ResService.signupUser(data).subscribe(
      (res)=>{
        console.log(res,'res##');
      
     if(res.status==true){
      alert("Signup successfully");
        this.router.navigate(['login']);
     }else if(res.status==false){
      this.errmsgShow = true;
      this.errmsg = res.msg;
      alert("Phonenumber already exists. Try another");
     }
        
      });
}
}
