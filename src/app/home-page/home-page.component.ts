import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../providers/auth.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public authservice : AuthService , private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.authservice.logoutFromGoogle();
    this.router.navigate(['login']);
  }

}
