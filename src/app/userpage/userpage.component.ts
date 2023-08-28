import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  stars: number = 0;
  name: string = '';
  movie: any;
  username: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((user) => {
      if(user.has('username'))
        this.username = user.get('username');
      if(user.has('name'))
        this.name = user.get('name');
    })

    this.http.post('http://localhost:1025/movie/load', {name: this.name}).subscribe((responseData) => {
      if(responseData["status"] == "success"){
        this.movie = responseData["data"];
        console.log(responseData)
      }
    })
    
  }

  starFunction(stars: number) {
    
    var i;
    let star = document.getElementsByClassName("star");
    for(i=0; i<5; i++)
      star[i].classList.remove("checked");
    for(i=0;i<stars;i++)
      star[i].classList.add("checked");
  }

  setStars(stars: number) {
    var i;
    this.stars = stars;
    this.displayStars();
  }

  displayStars(){
    var i;
    let star = document.getElementsByClassName("star");
    for(i=0; i<5; i++)
      star[i].classList.remove("checked");
    for(i=0; i<this.stars; i++)
      star[i].classList.add("checked");
  }

  post(com: any){
    var comments = {
      username: this.username,
      comment: com.value
    }
    this.movie.comments.push(comments);
    var request = {
      name: this.movie.name,
      genre: this.movie.genre,
      tlink: this.movie.tlink,
      ilink: this.movie.ilink,
      description: this.movie.description,
      comments: this.movie.comments
    }
    console.log(request)
    this.http.post("http://localhost:1025/movie/update", request).subscribe((responseData) => {
      // console.log(responseData);
      this.http.post('http://localhost:1025/movie/load', {name: this.name}).subscribe((responseData) => {
        if(responseData["status"] == "success"){
          this.movie = responseData["data"];
          // console.log(responseData)
        }
      })  
    })
  }
}
