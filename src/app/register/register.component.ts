import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  registeredMessage="SuccessFully Registered"

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  register(){
    this.userService.create(this.model).subscribe(data=>(
      this.registeredMessage=this.registeredMessage,
      this.router.navigate(['/login'])


    ))
  }

}
