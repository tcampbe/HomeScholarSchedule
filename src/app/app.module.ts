import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserService } from "./services/user.service";
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    DefaultComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule
  ],

  providers: [UserService],

  bootstrap: [AppComponent]

})

export class AppModule {}
