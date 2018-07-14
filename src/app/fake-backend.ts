import {HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Rx'

export class FakeBackendInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let users:any[]=JSON.parse(localStorage.getItem('users')) || [];
        return Observable.of(null).mergeMap(()=>{
            if(request.url.endsWith('api/authenticate') && request.method==='POST'){
                let filteredUsers=users.filter(user=>{
                    return user.username ===request.body.username && user.password === request.body.password;
                });
                if(filteredUsers.length){
                    let user=filteredUsers[0];
                    let body={
                        id:user.id,
                        username:user.username,
                        password:user.password,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        token:'fake-jwt-token'
                    };
                    return Observable.of(new HttpResponse({status:200,body:body}));
                }else{
                    return Observable.throw("UserName or Password Incorrect")
                }
            }

            if(request.url.endsWith('/api/user') && request.method==="GET"){
                if(request.headers.get('Autherization')==='Bearer fake-jwt-token'){
                    return Observable.of(new HttpResponse({status:200,body:users}))
                }
            }

            if(request.url.endsWith('/api/user') && request.method==="Post"){
                

            }

        }

        )
    }

}