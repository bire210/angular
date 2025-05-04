import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
{
    path:"about",component:AboutComponent
}
,
{
    path:"",component:HomeComponent
}
,
{
    path:"contact",component:ContactComponent
}
,
{
    path:"login",component:LoginComponent
}
,
 // Support both /profile and /profile/:id
 { path: "profile", component: ProfileComponent },
 { path: "profile/:name", component: ProfileComponent },

//wild card routing and also for not found page and should be always at last
{
    path:"**",component:PageNotFoundComponent
}
,
];
