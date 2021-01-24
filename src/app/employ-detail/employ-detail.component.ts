import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'

@Component({
  selector: 'app-employ-detail',
  templateUrl: './employ-detail.component.html',
  styleUrls: ['./employ-detail.component.css']
})
export class EmployDetailComponent implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }



}
