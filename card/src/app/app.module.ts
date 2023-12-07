import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './components/service/service.service';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSampleComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,



  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
