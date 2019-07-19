import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  text: string = "";
   private resultSubscription: Subscription;

  constructor(private userService: UsersService,private router:Router) { }

  ngOnInit() {
    
  }

  signUp(signup: NgForm) {
    if( signup.value.username && signup.value.password && signup.value.email 
      && signup.value.password == signup.value.cpassword) {
      
        this.text = "";
        const filteredForm = {
          username: signup.value.username,
          email: signup.value.email,
          region: signup.value.region,
          password: signup.value.password
        }
        this.resultSubscription = this.userService.userSignUp(filteredForm).subscribe((responseData) => {
          console.log("respose data: ", responseData);
          if(responseData['status'] == "success"){
            this.router.navigate(['home', "welcome", responseData["data"].username]);
            this.text = 'You have been Successfully registered'
          } else {
            this.text = 'Username already exists. Please try again';
            
          }
        });
    } else {
      this.text = "Please input all required details";
    }
  }
}
