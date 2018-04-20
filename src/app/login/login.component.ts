import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http,  private route: Router) { }

  ngOnInit() {

  }

  login(){
    this.http.get('http://192.168.1.16:8080/api/users/1')
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
