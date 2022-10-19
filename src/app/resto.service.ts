import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { getCurrencySymbol } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  

  isLoggedIn :any = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  
  url="http://localhost:3000/studentRecords";
  rootUrl="http://localhost:3000/users";
  getList(){
    // console.warn(" some data");
   return  (this.http.get<any[]>(this.url));
  }

  saveResto(data:any){  
  return  this.http.post(this.url,data);
  }

  deleteResto(id:any){

    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id:any){
    // console.log("url",`/$(this.url)/$(id)`);

    return this.http.get(`${this.url}/${id}`);
   
  }

  updateResto(id :any, data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

  registerUser(data:any){
  return this.http.post(this.rootUrl,data,{observe:'response'})
  .subscribe((res:any)=>{
       
    if(res){
         
         // localStorage.setItem('user',JSON.stringify(res.body));
          this.router.navigate(['']);
    //  console.warn("data sent", res);
   } });
  }

  reloadUser(){
   if(localStorage.getItem('user')){
   this.router.navigate(['']);
   }
  }

  userLogin(data:any)
{
  console.warn("userlogin",data);
   this.http.get(`${this.rootUrl}?email=${data.email}&password=${data.password}`,{observe:'response'})
   .subscribe((res:any)=>{
  console.warn("fetched user",res);
  if(res.body && res.body.length){
   console.warn("user successfully logged in"); 
   localStorage.setItem('user',JSON.stringify(res.body));
   this.router.navigate(['list']);
  }
  else{
    console.warn("Login failed!");
    this.isLoginError.emit(true);
  }
   })
}
}
