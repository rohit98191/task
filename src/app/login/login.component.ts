import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
loading=false;
  constructor(private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.loading=true
    this.authenticationService.login(this.model.username,this.model.password).subscribe(data=>{
      this.router
    })
  }

}
