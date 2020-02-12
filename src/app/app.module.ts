import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helpers/jwtInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
