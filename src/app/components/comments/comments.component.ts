import { Component, Input, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';
import { IComment, Post } from '../../models';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input()
  post!: Post;
  @Input()
  showMe!: boolean;
  showAddComment!: boolean
  comments: IComment[] = [];
  subscription!: Subscription;
  
  constructor(
    private routesService: RoutesService,
    private uiService: UiServiceService
    ) {
      this.subscription = this.uiService.onToggle().subscribe(value => this.showAddComment = value)
    }

  toggleAddComment() {
    this.uiService.toggleAddComment()
  }
  handleAddComment(data: any) {
    this.routesService.addComment(data).subscribe((res) => {
      this.comments.push(res)
      console.log("comment", res)
    } );
  }

  ngOnInit() {
    this.routesService.getComments(this.post.id).subscribe((data) => {
      this.comments = data;
    });
  }
}
