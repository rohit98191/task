import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";
@Injectable()
export class UserService{
    constructor(private http:HttpClient){}
    create(name:User){
        return this.http.post('/api/users',name)

    }
}