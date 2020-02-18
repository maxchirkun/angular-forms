import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SelectComponent} from './select/select.component';
import {CheckboxArrayComponent} from './checkbox-array/checkbox-array.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {DynamicFormGroupComponent} from './dynamic-form-group/dynamic-form-group.component';
import {ValidationFormComponent} from './validation-form/validation-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'checkbox-array',
    component: CheckboxArrayComponent,
  },
  {
    path: 'dynamic-form-group',
    component: DynamicFormGroupComponent,
  },
  {
    path: 'validation-form',
    component: ValidationFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
