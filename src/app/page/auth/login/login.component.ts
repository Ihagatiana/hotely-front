import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  constructor(private readonly formBuilder : FormBuilder) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      user_name : ['', Validators.required],
      password : ['', Validators.required]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
}
