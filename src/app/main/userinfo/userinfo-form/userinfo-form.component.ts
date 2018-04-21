import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../baseComponent';
import { Http, Headers, RequestOptions} from '@angular/http';
import { UserService } from '../../../shared/user.service';
declare var bootbox:any;
declare var $:any;
@Component({
  selector: 'app-userinfo-form',
  templateUrl: './userinfo-form.component.html',
  styleUrls: ['./userinfo-form.component.css']
})

export class UserinfoFormComponent extends BaseComponent implements OnInit {

  private pathUpdate = this._CONF.SERVER_API + "users/";
  constructor(private http: Http, private userService: UserService) { 
    super();
    
  }
  ngOnInit() {
    console.log(this.user);
    this.bindModal();
  }
  bindModal(){
    // $('#userinfoFormModal').on('show.bs.modal', (e)=>{
    //   console.log(this.user);
    // });
  }
  onSave(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers, method: "put" });
    let parameter = {

        "userId": this.user.userId, 
        "firstname": this.user.firstname, 
        "lastname": this.user.lastname, 
        "introduce": this.user.introduce, 
        "titlename": this.user.titlename,
        "email": this.user.email, 
        "address": this.user.address

      };

    console.log('parameter', parameter);
    this.http.put(this.pathUpdate + this.user.userId, parameter, options)
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
    this.userService.data.next(data);
  }

  onError(err){
    console.log('err', err);
    bootbox.alert('Error.');
  }
}
