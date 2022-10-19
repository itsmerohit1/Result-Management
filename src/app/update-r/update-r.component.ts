import { Component, OnInit } from '@angular/core';
import   {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-r',
  templateUrl: './update-r.component.html',
  styleUrls: ['./update-r.component.css']
})
export class UpdateRComponent implements OnInit {
 alert:boolean=false;
  constructor(private router:ActivatedRoute,private resto:RestoService , private goTo : Router) { }

  editResult  = new FormGroup({
    name: new  FormControl(''),
    rollNo:new FormControl(''),
    dob: new FormControl(''),
    score:new FormControl('')
  })
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);

    this.resto.getCurrentResto(this.router.snapshot.params['id']).
    subscribe((result:any)=>{
     this.editResult = new FormGroup({
        name: new  FormControl(result['name']),
        rollNo:new FormControl(result['rollNo']),
        dob: new FormControl(result['dob']),
        score:new FormControl(result['score'])

      })
    console.warn("result1",result);
    })
  }

  collection(){
     
    if(this.editResult.value['dob'] && this.editResult.value['score'] && this.editResult.value['name'] && this.editResult.value['rollNo'] ){
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResult.value).
    subscribe((result)=>{
    this.alert=true;
    alert('Result updated successfully!');
    })
    }
    else{
      alert('Some Fields are empty, please fill to updated!');
    }


  }

  

  GoToList(){

    this.goTo.navigate(['list']);
    
      }










closeAlert(){
  this.alert=false;
}

}
