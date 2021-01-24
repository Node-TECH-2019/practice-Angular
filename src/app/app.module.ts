import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { EmployDetailComponent } from './employ-detail/employ-detail.component';
=======
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetail2Component } from './employee-detail2/employee-detail2.component';
import { EmployeeDetail3Component } from './employee-detail3/employee-detail3.component';
import { EmployeeDetail4Component } from './employee-detail4/employee-detail4.component';
import { EmployeeDetail5Component } from './employee-detail5/employee-detail5.component';
>>>>>>> cb00858eaca5efbdc48e4316aee20ad098f8720a

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
<<<<<<< HEAD
    EmployDetailComponent
=======
    EmployeeDetailComponent,
    EmployeeDetail2Component,
    EmployeeDetail3Component,
    EmployeeDetail4Component,
    EmployeeDetail5Component
>>>>>>> cb00858eaca5efbdc48e4316aee20ad098f8720a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
