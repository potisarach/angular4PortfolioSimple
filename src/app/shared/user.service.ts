import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserModel } from './user.model';

@Injectable()
export class UserService{

    public data = new Subject<UserModel>();
    constructor(){
        let userModel = new UserModel();
        let localUser = localStorage.getItem('user');
        if(localUser){
            userModel = JSON.parse(localUser);
            this.data.next(userModel);
        }else{
            this.data.next(userModel);
        }
        
       
    }
    getData(): UserModel{
        let userModel = new UserModel();
        let localUser = localStorage.getItem('user');
        if(localUser){
            userModel = JSON.parse(localUser);
        }
        return userModel;
    }
}