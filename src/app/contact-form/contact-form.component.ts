import { Component, OnInit } from '@angular/core';
import { Forms } from '../forms.model'


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public contact_types: string[] = ['営業代行','ホームページ制作','オーダースーツ制作','Youtube動画制作','スマホ教室'];
  public model: Forms = new Forms('佐藤考太','さとうこうた','info@nodetech.sub.jp','info@nodetech.sub.jp',this.contact_types[1],'subject','こんにちは！\n私はさとぅんコタティス・G・チョムニダです。','合同会社NodeTECH.','080-6608-1575');

  public submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
