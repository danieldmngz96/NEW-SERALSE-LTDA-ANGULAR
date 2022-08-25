import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import {Router} from '@angular/router'; // import router from angular router



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  // matcher = new MyErrorStateMatcher();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Submit(){
    this.router.navigate(['/admin']);
  }
  go(){
		this.router.navigate(['/admin']); // navigate to other page
	}
}
