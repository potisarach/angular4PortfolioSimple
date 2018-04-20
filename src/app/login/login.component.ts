import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { BaseComponent } from '../baseComponent';
import { UserModel } from '../shared/user.model';
declare var bootbox:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  private loginPath = this._CONF.SERVER_API + 'login';
  public username: string;
  public password: string;;
  constructor(private user: UserModel, private http: Http,  private route: Router) {
    super(user);
   }

  ngOnInit() {

  }

  login(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let parameter = { 
                      "email": this.username
                    , "password": this.password
                  }
    let options = new RequestOptions({ headers: headers, method: "post" });
    this.http.post(this.loginPath, parameter, options)
    .map(res => res.json())
    .subscribe(
    data => this.saveStorage(data),
    err => this.onError(err),
    () => console.log('Fetching complete for Server Api.')
    );
  }

  saveStorage(data){
    console.log("LOGIN RETURN",data)
    let dataUser = JSON.stringify(data);
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('user', dataUser);
    this.route.navigate(['/']);
  }
  onError(err){
    bootbox.alert('Users not found with Email or incorrect');
  }
}
