import { Component, OnInit } from '@angular/core';
import   {FormGroup,FormControl} from '@angular/forms'
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
resultexist=0;

  constructor(private resto:RestoService) { 

  }
  
  result= new FormGroup({
    name : new FormControl(''),
    rollNo:new FormControl('')
  })

   Student_result:any=[];
 

  ngOnInit(): void {
   
  }

    
  GetResult(){
    this.resto.getList().subscribe((res)=>{
      this.Student_result=res.find(data=>data.name==this.result.value.name && data.rollNo==this.result.value.rollNo );
      if(this.Student_result){
        this.resultexist=1;
      }
      else{
        this.resultexist=-1;
      }
       console.warn("result123",this.Student_result,this.resultexist);
    })
    
  }

  GoResult(){
    this.result.reset();
    this.resultexist=0;
  }

  clearForm(){
    this.result.reset();
  }
}
