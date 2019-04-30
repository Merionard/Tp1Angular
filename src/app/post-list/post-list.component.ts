import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {

  @Input() posts:Post[];
  postSubscription : Subscription;


  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts:Post[])=>this.posts=posts
    );
    this.postService.emitPostsSubject();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
