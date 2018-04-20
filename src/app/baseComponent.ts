import { UserModel } from "./shared/user.model";

export class BaseComponent{
    public user: UserModel;
    constructor(){
        this.user = JSON.parse(localStorage.getItem('user'));    
    }
    public getUserData(): UserModel{
        return this.user;
    }
    public getFullName(): string{
        if(!this.user.firstname){
            return '';
        }
        return this.user.firstname + ' ' + this.user.lastname; 
    }
} 