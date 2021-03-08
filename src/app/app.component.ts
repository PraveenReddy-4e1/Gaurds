import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
