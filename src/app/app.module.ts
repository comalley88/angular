import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ButtonComponent } from './components/button/button.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ButtonComponent,
    CommentsComponent,
    HeaderComponent,
    PostCardComponent,
    PostsComponent,
    AddCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
