import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesService } from 'src/app/services/routes.service';
import { IMessage, ISubmitPost, Post, User } from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  users!: User[]

  constructor(private routesService: RoutesService) {}

  handleAddPost(postData: any) {
    this.routesService.addUser(postData).subscribe((res) => {
      this.users.push(res)
      console.log("user", res)
    } );
    this.routesService.addPost(postData).subscribe((res) =>{
      this.posts.push(res)
      console.log("post", res)
    } );
    
  }

  ngOnInit() {
    this.routesService.getMessages().subscribe((res) => {
   (this.posts = res);
    });
    this.routesService.getUsers().subscribe((res) => {
      (this.users = res);
       });
  }
}