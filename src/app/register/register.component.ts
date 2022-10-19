import { Component, OnInit } from '@angular/core';
import   {FormGroup,FormControl, EmailValidator} from '@angular/forms'
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
import { STRING_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   able:boolean= false;
   showLogin:boolean=true;
   isError='';
  alert:boolean=true;

  register = new FormGroup({
    name: new  FormControl(''),
    email:new   FormControl(''),
    password: new FormControl('')
  })

  login = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  })
  constructor( private resto:RestoService
    ,private router:Router
    ) { }

  ngOnInit(): void {
    this.resto.reloadUser();
  }
  
  registerUser(){
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const email1 : any =this.register.value.email;
    const result:boolean = expression.test(email1);

      if(!this.register.value.name  || !this.register.value.password){
        alert('name and password field cannot be empty');
      }
      else{
   if(result){
    this.resto.registerUser(this.register.value);
    this.able=false;
    alert('user registered successfully');
   }
   else{
    alert('invalid email type');
   }
  }
}
  
  closeAlert(){
    this.alert=false;
  }
  openLogin(){
    this.showLogin=true;
  }
  closeLogin(){
    this.showLogin=false;
  }

  loginUser(){
    this.isError='';
    this.resto.userLogin(this.login.value);
    this.resto.isLoginError.subscribe((isError)=>{
      if(isError){
    this.isError='Email or password is not correct!';
      }
    })
  }


}
