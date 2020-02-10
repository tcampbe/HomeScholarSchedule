import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.profileForm = this.fb.group({

      firstName: ["", Validators.required],

      lastName: ["", Validators.required],

      dob: ["", Validators.required],

      hobbies: [""],

      homeAddress: ["", Validators.required],

      favoriteFood: [""],

      favoriteMovie: [""],

      favoriteArtist: [""]

    });
    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  navigate(): void {
    this.router.navigate(["/register"]);
  }
}

