import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutUsComponent } from './home/about-us/about-us.component';

const routes: Routes = [
  { path:'', pathMatch:"full", redirectTo: "home"},
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'register/:type', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
