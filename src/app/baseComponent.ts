import { UserModel } from "./shared/user.model";
import * as globalConf from "./global.conf";
import { AppComponent } from "./app.component";
import { UserService } from "./shared/user.service";

export class BaseComponent{
    public _CONF = globalConf;
    public user: UserModel;
    constructor(){
       let userService = AppComponent.injector.get(UserService);
       this.user = userService.getData();
       userService.data.subscribe((data)=>{
           this.user = data;
       });
    }
    
    public getFullName(): string{
        return this.user.firstname + ' ' + this.user.lastname;
    }
} 