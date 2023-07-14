import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LikeComponent } from './like/like.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { component: ReactiveFormComponent, path: 'reactive-Form' },
  {component: ArrayFormComponent,path: 'array-form',},
  { component: ContactFormComponent,path: 'contact-form'},
  { component: LikeComponent, path: 'like' },
  { component: ChangePasswordComponent, path: 'changePassword' },
  { component: FavoriteComponent, path: 'favorite' },
  { component: HttpPostComponent, path: 'http-post' },
  { component: ZippyComponent, path: 'zippy' },
  { component: GithubFollowersComponent, path: 'GitHub' },
  { component: LoginComponent, path: 'login' },
  


  { component:HomeComponent , path: '**' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
