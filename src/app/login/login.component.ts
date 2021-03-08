import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  onLoginSumbit(form){
    if(form.value.email === 'praveen@gmail.com' && form.value.password === 'praveen'){
      localStorage.setItem('user','praveen@gmail.com');
      this.route.navigate(['/home']);
    }else{
      console.log("fails")
    }

  }
}
