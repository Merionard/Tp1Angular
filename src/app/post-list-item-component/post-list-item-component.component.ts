import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService:PostService) { }
  ngOnInit() {
  }
  onLoveIt(){
    this.post.loveIts+=1;
  }
  onDontLoveIt(){
    this.post.loveIts-=1;
  }

  onRemovePost(){
    this.postService.removePost(this.post);
  }

}
