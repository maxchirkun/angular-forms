import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

interface LoginFormValue {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  loginFormFb: FormGroup = this.fb.group({
    login: this.fb.control(''),
    password: this.fb.control(''),
  });
  readonly loginFormFbValue$: Observable<LoginFormValue> = this.loginFormFb.valueChanges;

  loginFormClass: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  readonly loginFormClassValue$: Observable<LoginFormValue> = this.loginFormClass.valueChanges;

  constructor(private fb: FormBuilder) {
  }

  login(formValue: LoginFormValue) {
    console.log(formValue);
  }
}
