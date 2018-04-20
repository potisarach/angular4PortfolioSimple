import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';
import { Http, Headers, RequestOptions} from '@angular/http';
import { UserModel } from '../../../shared/user.model';
declare var bootbox:any;
declare var $:any;
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
  public picProfile: string;
  public email: string;
  public address: string;
  private pathUpdate = this._CONF.SERVER_API + "/users/"+this.user.userId;
  constructor(private user: UserModel,private http: Http) { 
    super(user);
    
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.introduce = this.user.introduce;
    this.titlename = this.user.titlename;
    this.picProfile = this.user.picProfile;
    this.email = this.user.email;
    this.address = this.user.address;

  }
  ngOnInit() {
    console.log(this.user);
  }

  onSave(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers, method: "put" });
    let parameter = {

        "userId": 2, 
        "firstname": this.firstname, 
        "lastname": this.lastname, 
        "introduce": this.introduce, 
        "titlename": this.titlename,
        "email": this.email, 
        "address": this.address

      };

    console.log('parameter', parameter);
    this.http.put(this.pathUpdate, parameter, options)
    .map(res => res.json())
    .subscribe(
    data => this.onSuccess(data),
    err => this.onError(err),
    () => console.log('Fetching complete for Server Api.')
    );
  }

  onSuccess(data){
    console.log('response', data);
    $("#userinfoFormModal").modal('hide');
    let dataUser = JSON.stringify(data);
    localStorage.setItem('user', dataUser);
    bootbox.alert('Successed.');
  }

  onError(err){
    console.log('err', err);
    bootbox.alert('Error.');
  }
}
