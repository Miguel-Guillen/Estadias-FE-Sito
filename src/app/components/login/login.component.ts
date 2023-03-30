import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  recoverForm: FormGroup;
  formValid: Boolean | null = null;
  show = false;
  matricula: string = '';
  icons!: [string, string[]][];

  constructor(private router: Router, private formB: FormBuilder,
    private _service: AuthService, private iconSet: IconSetService) {
    this.loginForm = this.formB.group({
      user: ["", Validators.required],
      password: ["", Validators.required]
    })

    this.recoverForm = this.formB.group({
      user: ["", Validators.required],
      date: ["", Validators.required]
    })

    this.iconSet.icons = { ...freeSet };
  }

  ngOnInit(): void {
  }

  login(values: any){
    this.formValid = true;
    if(this.loginForm.valid){
      this._service.authUser(values).then((res: any) => {
        if(res.status == 200) this.router.navigate(['/dashboard']);
        else this.formValid = false;
      })
    }
  }

  recoverAccount(values: any){
    if(this.recoverForm.valid){
      console.log(values);
      this._service.recoverAccount(values).then((res: any) => {
        if(res.status == 200) this.reset();
        else this.formValid = false;
      })
    }
  }
  
  recoverPassword(){

  }

  get user(){
    return this.loginForm.get('user');
  }

  get pass(){
    return this.loginForm.get('password');
  }

  reset(){
    this.formValid = null;
    this.loginForm.reset();
    this.recoverForm.reset();
    this.show = false;
  }
}
