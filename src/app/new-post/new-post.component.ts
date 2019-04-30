import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { NgForm } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:PostService,private router : Router) { }
  post:Post=new Post();

  ngOnInit() {
  }
  onSubmit(ngForm:NgForm){
    this.post.title=ngForm.value['titre'];
    this.post.content = ngForm.value['contenu'];
    this.post.created_at=new Date();
    this.post.loveIts=0;
    this.postService.addPost(this.post);
    this.router.navigate(['post-list']);

  }

}
