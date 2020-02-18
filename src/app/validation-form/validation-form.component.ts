import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {NbMomentDateService} from '@nebular/moment';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['../app.component.scss']
})
export class ValidationFormComponent implements OnInit {
  validationFormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    birthDate: this.fb.control('', [Validators.required]),
    gender: this.fb.control('', [Validators.required]),
    skills: this.fb.control('', [minTwoSelected()]),
  });

  value$ = this.validationFormGroup.valueChanges
    .pipe(
      map(value => this.mapValue(value)),
    );

  validValue$ = this.validationFormGroup.statusChanges
    .pipe(
      filter(status => status === 'VALID'),
      map(() => {
        return this.mapValue(this.validationFormGroup.value);
      })
    );

  constructor(private fb: FormBuilder, private momentService: NbMomentDateService) {
  }

  get name(): FormControl {
    return this.validationFormGroup.get('name') as FormControl;
  }

  get birthDate(): FormControl {
    return this.validationFormGroup.get('birthDate') as FormControl;
  }

  get gender(): FormControl {
    return this.validationFormGroup.get('gender') as FormControl;
  }

  get skills(): FormControl {
    return this.validationFormGroup.get('skills') as FormControl;
  }

  ngOnInit(): void {
    this.validationFormGroup.get('skills').setValue([
      {
        code: 'sharp',
        name: 'C#',
        selected: false
      }, {
        code: 'ang',
        name: 'Angular',
        selected: false
      }, {
        code: 'react',
        name: 'React',
        selected: false
      }, {
        code: 'lc',
        name: 'Low Code',
        selected: false
      }
    ]);
  }

  save() {

  }

  mapValue(value): any {
    const skillsSet = {};
    value.skills.forEach(skill => {
      skillsSet[skill.code] = skill.selected;
    });
    return {
      ...value,
      birthDate: this.momentService.format(value.birthDate, 'DD/MM/YYYY'),
      skills: skillsSet,
    };
  }
}

function minTwoSelected(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value.length > 0) {
      const valid = (control.value as any[]).filter(item => item.selected).length >= 2;
      return valid ? null : {minTwoSelected: {value: control.value}};
    }
    return {minTwoSelected: {value: control.value}};
  };
}
