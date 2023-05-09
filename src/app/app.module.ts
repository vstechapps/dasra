import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './user/profile/profile.component';
import { InputComponent } from './basic/input/input.component';
import { CardComponent } from './basic/card/card.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { MaterialModule } from './shared/material.module';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './basic/loader/loader.component';
import { LoaderInterceptor } from './basic/loader/loader.interceptor';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { BenefitsComponent } from './benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    InputComponent,
    CardComponent,
    LoginComponent,
    ContactUsComponent,
    RegisterComponent,
    LoaderComponent,
    AboutUsComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
