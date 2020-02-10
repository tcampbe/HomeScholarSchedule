import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({

      userName: ["", Validators.required],

      password: ["", Validators.required]

    });
    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }

  navigate(): void {
    this.router.navigate(["/register"]);
  }
}

