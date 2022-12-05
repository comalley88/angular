import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit {
  @Input()
  post!: Post;
  @Output() OnAddComment = new EventEmitter();
  email!: string;
  name!: string;
  body!: string;
  showAddComment!: boolean; 
  subscription: Subscription

  constructor (private uiService: UiServiceService){
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddComment = value;
    console.log(this.showAddComment)})
  }

onSubmit() {
  const formData = {
  postId: this.post.id,
  name: this.name,
  email: this.email,
  body: this.body,
  }

  this.OnAddComment.emit(formData);

}

ngOnInit() { 
}
}
