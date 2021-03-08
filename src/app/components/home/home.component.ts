import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'i18n-Ang';
  test = 'First test case'
  public userResponse: string;
  constructor() {}

  ngOnInit() {}

  sayYes() {
    this.userResponse = 'I am In';
  }
  sayNo() {
    this.userResponse = '';
  }

}
