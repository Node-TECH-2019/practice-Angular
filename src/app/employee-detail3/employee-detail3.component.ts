import { Component, OnInit } from '@angular/core';
import { contact_types } from '../forms.model';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-employee-detail3',
  templateUrl: './employee-detail3.component.html',
  styleUrls: ['./employee-detail3.component.css']
})
export class EmployeeDetail3Component implements OnInit {

  form: FormGroup;
  contact_types = contact_types;

  // public readonly minYourNameLength: number = 1;
  // public readonly maxYourNameLength: number = 50;



  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._buildForm();
  }

  submit(form: FormGroup) {
    console.log(form);
  }

  get your_name() {
    return <FormControl>this.form.get('your_name');
  }

  get furigana() {
    return <FormControl>this.form.get('furigana');
  }

  get email() {
    return <FormControl>this.form.get('email');
  }

  get email_check() {
    return <FormControl>this.form.get('email_check');
  }

  get contact_type() {
    return <FormControl>this.form.get('contact_type');
  }

  get subject() {
    return <FormControl>this.form.get('subject');
  }

  get comment() {
    return <FormControl>this.form.get('comment');
  }

  get companyname() {
    return <FormControl>this.form.get('companyname');
  }

  get tel() {
    return <FormControl>this.form.get('tel');
  }

  private _buildForm(): FormGroup {
    return this._fb.group({
      your_name: ['', [Validators.required, Validators.pattern('[a-zA-Zぁ-んァ-ン一-龥]*')]],
      furigana: ['', [Validators.required , Validators.pattern('[ぁ-ん]*')]],// your_nameがa-zA-Zなら、notrequiredに
      //誰も回答を見つけることができなかったものです。この難題にあなたは解けることができる
      email: ['', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]] ,
      //match emailの記述が発見できませんでした。のちの人にお願いいたします。
      email_check: ['', [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contact_type: [this.contact_types[1], Validators.required ],
      subject: ['', Validators.required , Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u') ],
      comment: ['', Validators.required , Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u')],
      companyname: ['', Validators.pattern('/^[ぁ-んァ-ヶ一-龥々０-９ａ-ｚＡ-Ｚー・’＠]+$/u')],
      tel: ['', Validators.pattern("[A-Z0-9]*")]
    })
  }

  //SQLインジェクション対策をする。
  //https://qiita.com/mas0061/items/c2e9cd0d27e09448d28e
}
function matchEmail(ac: AbstractControl) {
  const email = ac.get('email').value;
  const emailCheck = ac.get('email_check').value;
  if (email !== emailCheck) {
    ac.get('email_check').setErrors({ notMatchEmail: true });
  }
}
