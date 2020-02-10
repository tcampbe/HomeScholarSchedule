import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  { path: "", component: LoginComponent},

  { path: "register", component: RegisterComponent},

  { path: "userProfile", component: UserProfileComponent},

  { path: "**", component: LoginComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule {}
