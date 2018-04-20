import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';
import { Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-userinfo-form',
  templateUrl: './userinfo-form.component.html',
  styleUrls: ['./userinfo-form.component.css']
})
export class UserinfoFormComponent extends BaseComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public introduce: string;
  public titlename: string;
  private pathUpdate = this._CONF.SERVER_API + "";
  constructor(private http: Http) { 
    super();
    
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.introduce = this.user.introduce;
    this.titlename = this.user.titlename;

  }
  ngOnInit() {
    console.log(this.user);
  }

  onSave(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers, method: "put" });
    let parameter = {};
    this.http.put(this.pathUpdate, parameter, options)
    .map(res => res.json())
    .subscribe(
    data => this.onCompleted(data),
    err => console.log('err', err),
    () => console.log('Fetching complete for Server Api.')
    );
  }
  onCompleted(data){
    console.log('data', data);
  }
}
