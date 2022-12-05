import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {

  @Input()
  posts!: Post[]; 
  @Output() OnAddPost = new EventEmitter<object>();
  title: string = '';
  name: string = '';
  body: string = '';
  companyName: string = '';
  id!: number;
  
  

  constructor() {}

  onSubmit() {

  this.id = this.posts.length
   console.log(this.id)
    
    const postData = {
      userId: 1,
      id: this.id,
      body: this.body,
      title: this.title,
      name: this.name,
      company: {
        name: this.companyName
      } 
    };
  

    this.OnAddPost.emit(postData);

    (this.name = ''), (this.body = ''), (this.companyName = '') , (this.title = '') 
  }
  ngOnInit() { 
  }
}
