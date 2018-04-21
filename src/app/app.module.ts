import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './routing';
import { MenuLeftComponent } from './main/menu-left/menu-left.component';
import { MenuHeaderComponent } from './main/menu-header/menu-header.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProfileComponent } from './main/profile/profile.component';
import { WorkexperienceComponent } from './main/workexperience/workexperience.component';
import { EducationComponent } from './main/education/education.component';
import { UserinfoComponent } from './main/userinfo/userinfo.component';
import { UserinfoFormComponent } from './main/userinfo/userinfo-form/userinfo-form.component';
import { SkillsComponent } from './main/skills/skills.component';
import { SkillsFormComponent } from './main/skills/skills-form/skills-form.component';
import { WorkexperienceFormComponent } from './main/workexperience/workexperience-form/workexperience-form.component';
import { UserModel } from './shared/user.model';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuLeftComponent,
    MenuHeaderComponent,
    LoginComponent,
    PageNotfoundComponent,
    ProfileComponent,
    WorkexperienceComponent,
    EducationComponent,
    UserinfoComponent,
    UserinfoFormComponent,
    SkillsComponent,
    SkillsFormComponent,
    WorkexperienceFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
