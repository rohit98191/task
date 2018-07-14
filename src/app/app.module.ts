import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Routes,RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {UserService} from './user.service';
import {AuthenticationService} from './authentication.service';
// import {  HttpClient } from '@angular/common/http';



const approutes:Routes=[
  {path:'',canActivate[AuthGuard],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];





@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClient,
    HttpClientModule,
    RouterModule.forRoot(approutes)
    
  ],
  providers: [AuthGuard,UserService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
