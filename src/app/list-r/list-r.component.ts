import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-r',
  templateUrl: './list-r.component.html',
  styleUrls: ['./list-r.component.css']
})
export class ListRComponent implements OnInit {

  constructor(private resto : RestoService , private route:Router) { }
  collection:any=[];

  ngOnInit(): void {

    this.resto.getList().subscribe(data=>{
      // console.log(data);
      this.collection=data;
      
    })

  }
      
    deleteResto(id:any){

      this.resto.deleteResto(id).subscribe((result)=>{
        this.resto.getList().subscribe(data=>{
          // console.log(data);
          this.collection=data;
          
        })
    
      })
    }
url ="http://localhost:4200/add";

    goToAdd(){
this.route.navigate(['add']);
    }
   
    
      
  

}
