import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.css']
})
export class CardSampleComponent {
  newData:any
constructor(private service:ServiceService){
service.getData().subscribe((val)=>{
  this.newData=val;
  console.log(this.newData);

})
}
}
