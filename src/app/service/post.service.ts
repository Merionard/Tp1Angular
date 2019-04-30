import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../Post';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  private posts :Post[]=[
    {id:1,
      title:"Mon premier post",
    content:"blzifjhzofijzfzfozaifjza",
    created_at:new Date(),
    loveIts:0},
    {id:2,
      title:"Mon second post",
    content:"blzifjhzofijzfzfodzdzdzdzdzdzdzdzdzdzzaifjza",
    created_at:new Date(), 
    loveIts:0},
    {id:3,
      title:"Mon dernier post",
    content:"blzifjhzofisdsqdsqdsqdsqdsdsqjzfzfozaifjza",
    created_at:new Date(), 
    loveIts:0}
  ];


  postsSubject = new Subject<any[]>();

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post:Post){
    this.posts.push(post);
    this.emitPostsSubject();
  }

  removePost(post:Post){
    const postToFind = this.posts.find(
      (postTofind)=>{
        return postTofind.id===post.id;
      }
    )
    this.posts.splice(this.posts.indexOf(postToFind),1);
    this.postsSubject.next(this.posts.slice());

  }
}
