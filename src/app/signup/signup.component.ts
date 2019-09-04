import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      first_name: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      last_name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      country: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      console.log(this.signupForm);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
