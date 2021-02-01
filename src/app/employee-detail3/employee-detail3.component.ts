import { Component, OnInit } from '@angular/core';
import { contact_types } from '../forms.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-detail3',
  templateUrl: './employee-detail3.component.html',
  styleUrls: ['./employee-detail3.component.css']
})
export class EmployeeDetail3Component implements OnInit {

  employeeForm: FormGroup;
  contact_types = contact_types;

  public readonly minYourNameLength: number = 1;
  public readonly maxYourNameLength: number = 50;



  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      your_name: ['', Validators.required,Validators.pattern('^[ぁ-んァ-ン一-龥]') ],
      furigana: ['', Validators.required , Validators.pattern('/^[ぁ-ん]+$/') ],
      email: ['', Validators.required, Validators.pattern('/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/') ],
      email_check: ['', Validators.required , Validators.pattern('/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/')],
      contact_type: [this.contact_types[1], Validators.required ],
      subject: ['', Validators.required , Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u') ],
      comment: ['', Validators.required , Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u')],
      companyname: ['', Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u')],
      tel: ['', Validators.pattern("[A-Z0-9]*")]
    });
  }

  //SQLインジェクション対策をする。
  //https://qiita.com/mas0061/items/c2e9cd0d27e09448d28e

    static matchEmail(ac: AbstractControl) {
    const email = ac.get('email').value;
    const emailCheck = ac.get('email_check').value;
    if (email !== emailCheck) {
      ac.get('email_check').setErrors({ notMatchEmail: true });
    }
  }




  ngOnInit(): void {
  }

}
