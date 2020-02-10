import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }


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
}