import { Component } from '@angular/core';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  links=[
    {
      path:'/card',
      name:'Card'
    },
    {
      path:'/form',
      name:'Register'
    },
  ]
}
