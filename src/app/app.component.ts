import { Component } from '@angular/core';
import { RestoService } from './resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(private resto:RestoService ,private route:Router ){}
  
  title = 'Restaurent';
  showDisplay:boolean=false;
  
  Logout(){
  
    localStorage.removeItem('user');
    this.route.navigate(['']);

  }

  noDisplay(){
    this.showDisplay=true;
  }

  goToRegister(){
    this.route.navigate(['register']);
  }

  goToResult(){
    this.route.navigate(['result']);
  }

}
