import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/auth.guard";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { ProfileComponent } from "./main/profile/profile.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent  
            },
            {
                path: 'main',
                component: MainComponent,
                canActivate: [AuthGuard],
                children:[
                    {
                        path: 'profile',
                        component: ProfileComponent
                    }
                ]
            },
            {
                path: '**',
                component: PageNotfoundComponent
            }

        ])
    ],
    declarations: [],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule{}