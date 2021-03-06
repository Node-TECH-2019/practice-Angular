import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetail2Component } from './employee-detail2/employee-detail2.component';
import { EmployeeDetail3Component } from './employee-detail3/employee-detail3.component';
import { EmployeeDetail4Component } from './employee-detail4/employee-detail4.component';
import { EmployeeDetail5Component } from './employee-detail5/employee-detail5.component';
import { EmployeeListComponent } from './employee-detail3/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    EmployeeDetailComponent,
    EmployeeDetail2Component,
    EmployeeDetail3Component,
    EmployeeDetail4Component,
    EmployeeDetail5Component,
    EmployeeListComponent
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
