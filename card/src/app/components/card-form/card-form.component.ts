import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  constructor(private service:ServiceService,private route:Router){}
  carduser=new FormGroup({
    name: new FormControl('',[Validators.required]),
    digit:new FormControl('',[Validators.required]),
    from:new FormControl('',[Validators.required]),
    to:new FormControl('',[Validators.required])

  })
  d1:any

cardDetails(data:any){
  this.service.postData(data).subscribe((val)=>{


console.log('value'+this.carduser.value);

  })
  alert('Data saved')
  this.carduser.reset()
  // this.route.navigate(['/card'])
}
}
