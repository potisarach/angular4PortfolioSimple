import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import { BaseComponent } from '../baseComponent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  private loginPath = this._CONF.SERVER_API + 'users';
  constructor(private http: Http,  private route: Router) {
    super();
   }

  ngOnInit() {

  }

  login(){
    this.http.get(this.loginPath + '/1')
    .map(res => res.json())
    .subscribe(
    data => this.saveStorage(data),
    err => console.log('err', err),
    () => console.log('Fetching complete for Server Api.')
    );
  }

  saveStorage(data){
    let dataUser = JSON.stringify(data);
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('user', dataUser);
    this.route.navigate(['/']);
  }
}
