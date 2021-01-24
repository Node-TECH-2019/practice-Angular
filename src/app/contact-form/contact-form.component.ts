import { Component, OnInit } from '@angular/core';
import { Forms } from '../forms.model'


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  public submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
