import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:any;
  private isAuthenticated: boolean = false; 

  text: string = "";

  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  accept(log: NgForm) {
    if(log.value.username && log.value.password){
      this.text = "";
      this.userService.userLogIn(log.value).subscribe((response) => {
        console.log(response)
        if(response["status"] == 'success'){
          this.text = "";
          this.router.navigate(['home','hi',response["data"].username]);
        } else {
          this.text = "Incorrect username or password. Please try again";
        }
      })
    } else {
      this.text = "Username or Password is missing";
    }
  }
}
