import { Component, OnInit } from '@angular/core';
import { CanComponentLeave } from 'src/app/de-active.guard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,CanComponentLeave{
  email :any;
  constructor() { }

  ngOnInit(): void {
  }
  onEditSumbit(form){

  }
  canLeave():boolean{
    if(this.email){
      return window.confirm("you have some unsavedChanges")
    }
    return true;
  }
}
