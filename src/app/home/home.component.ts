import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  status: string = "";
  username: string = "";
  welcomeText: string = "";

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((user) => {
      if(user.has("username")) {
        this.username = user.get("username");
        console.log(user)
      } else
        console.log("nothing");
      if(user.has("signup"))
        this.status = user.get("signup");
    });
    console.log(this.welcomeText);
    if(this.status == 'hi')
      this.welcomeText = "Hi "+this.username+", which movie would you like to review today.";
    if(this.status == 'welcome')
      this.welcomeText = "Welcome "+this.username+", you have been successfully registered. What would you like to start with"; 

    this.http.post("http://localhost:1025/table/load", "hello").subscribe((responseData) => {
      if(responseData["status"] == "success"){
        this.movies = responseData['data'];
      }
    })
  }

  open(name: string) {
    this.router.navigate(['../movie', name, this.username])
  }
}
