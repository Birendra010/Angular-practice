import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post.service.service';

@Component({
  selector: 'http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css'],
})
export class HttpPostComponent implements OnInit {
  posts: any;

  constructor(private service: PostServiceService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
      console.log(response);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    // input.value = '';
    // this.service.createPost(post).subscribe((response) => {
      
    // });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.service
      .deletePost(post.id)

      .subscribe((response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
