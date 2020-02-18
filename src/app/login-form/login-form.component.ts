import {ChangeDetectionStrategy, Component, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NbDialogService} from '@nebular/theme';

interface LoginFormValue {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  loginFormGroup: FormGroup = this.fb.group({
    login: [''],
    password: this.fb.control(''),
  });

  loginControl: FormControl = new FormControl('');
  passwordControl: FormControl = new FormControl('');

  constructor(private fb: FormBuilder, private dialogService: NbDialogService) {
  }

  login(formValue: LoginFormValue, dialog: TemplateRef<any>) {
    if (formValue.login.length > 0 && formValue.password.length > 0) {
      this.dialogService.open(dialog, {context: {login: formValue.login, password: formValue.password}});
    }
  }
}
