import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({

      userName: ["", Validators.required],

      password: ["", Validators.required]

    });
    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  navigate(): void {
    this.router.navigate(["/register"]);
  }
}
