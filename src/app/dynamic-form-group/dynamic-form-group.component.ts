import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['../app.component.scss']
})
export class DynamicFormGroupComponent {

  newItemFormControl = this.fb.control('');
  dynamicFormGroup = this.fb.group({});

  itemsValue$ = this.dynamicFormGroup.valueChanges;

  private items = new BehaviorSubject<{ name: string, value: string }[]>([]);
  readonly items$ = this.items.asObservable();

  constructor(private fb: FormBuilder, private toastrService: NbToastrService) {
  }

  addItem() {
    const name = this.newItemFormControl.value;
    if (name.length === 0) {
      return;
    }
    if (this.dynamicFormGroup.contains(name)) {
      this.toastrService.danger('', 'This control already exists.');
    } else {
      this.dynamicFormGroup.addControl(name, this.fb.control(''));
      // this.dynamicFormGroup.registerControl(name, this.fb.control(''));
      this.items.next([
        ...this.items.value,
        {
          name,
          value: '',
        }
      ]);
    }
    this.newItemFormControl.reset('');
  }

  removeItem(name: string) {
    if (this.dynamicFormGroup.contains(name)) {
      this.dynamicFormGroup.removeControl(name);
      this.items.next(this.items.value.filter(item => item.name !== name));
    }
    this.newItemFormControl.reset('');
  }
}
