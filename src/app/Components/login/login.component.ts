import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/Services/login-auth.service';
LoginAuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private loginService:LoginAuthService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup= new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      this.loginService.loginData(this.formGroup.value).subscribe(result=>{
        console.log(result)
      })
    }
  }
}
