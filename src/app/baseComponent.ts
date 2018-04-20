import { UserModel } from "./shared/user.model";
import * as globalConf from "./global.conf";

export class BaseComponent{
    public _CONF = globalConf;
    constructor(public user: UserModel){
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