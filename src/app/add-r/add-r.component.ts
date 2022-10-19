import { Component, OnInit } from '@angular/core';
import   {FormGroup,FormControl} from '@angular/forms'
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  styleUrls: ['./add-r.component.css']
})

export class AddRComponent implements OnInit {
  
alert:boolean=false;

  addResult  = new FormGroup({
    name: new  FormControl(''),
    rollNo:new FormControl(''),
    dob: new FormControl(''),
    score:new FormControl('')
  })
  constructor( private resto:RestoService , private route :Router) { }

  ngOnInit(): void {
  }
  
  collectRestro(){
  //  console.log(this.addResto.value);

  if(this.addResult.value){

    if(this.addResult.value['dob'] && this.addResult.value['score'] && this.addResult.value['name'] && this.addResult.value['rollNo'] ){
  this.resto.saveResto(this.addResult.value).subscribe(()=>{
    console.log("data sent to service");
   
  })

   this.alert=true;
   this.addResult.reset({});
  }
  else{
    alert('No Field Cannot be Empty');
  }

}

}

  closeAlert(){
    this.alert=false;
  }

  GoToList(){

this.route.navigate(['list']);

  }
}
