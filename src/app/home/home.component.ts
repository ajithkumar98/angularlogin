import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  password;

  constructor(public router: Router) { }

  ngOnInit() {
  }
login() {
  // tslint:disable-next-line:triple-equals
  if (this.username == 'ajith' && this.password == 123456) {
    alert('Hey man');
    this.router.navigateByUrl('homepage');
   } else {
    alert('Invalid Credentials');
  }

}
}
