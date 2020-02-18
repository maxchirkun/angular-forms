import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
  NbThemeModule,
  NbToastrModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {LoginFormComponent} from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectComponent} from './select/select.component';
import {CheckboxGroupComponent} from './shared/checkbox-group.component';
import {CheckboxArrayComponent} from './checkbox-array/checkbox-array.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {DynamicFormGroupComponent} from './dynamic-form-group/dynamic-form-group.component';
import {ValidationFormComponent} from './validation-form/validation-form.component';
import {NbMomentDateModule, NbMomentDateService} from '@nebular/moment';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SelectComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    CheckboxArrayComponent,
    DynamicFormGroupComponent,
    ValidationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule,
    NbMomentDateModule,
    NbActionsModule,
    RouterModule,
  ],
  providers: [NbMomentDateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
