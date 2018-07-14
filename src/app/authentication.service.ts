import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/observable';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
@Injectable()
export class AuthenticationService{
    constructor(private http:HttpClient){}

    login(username:string,password:string){
        return this.http.post<any>('/api/authenticate',{username:username,password:password}).map(user=>{
            if(user && user.token){
                localStorage.setItem('currentUser',JSON.stringify(user));
            }
            return true
        });

    }

    logout(){
        localStorage.removeItem('currentUser');
    }
}