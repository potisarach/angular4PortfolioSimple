import { UserModel } from "./shared/user.model";
import * as globalConf from "./global.conf";
import { AppComponent } from "./app.component";

export class BaseComponent{
    public _CONF = globalConf;
    public user: UserModel
    constructor(){
        this.user = AppComponent.injector.get(UserModel);
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