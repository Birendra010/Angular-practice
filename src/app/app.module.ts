
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpPostComponent } from './http-post/http-post.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component'
import { GithubFollowersService } from './services/github-followers.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    ArrayFormComponent,
    ChangePasswordComponent,
    HttpPostComponent,
    HomeComponent,
    GithubFollowersComponent,
    AuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
