import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface CheckBoxItem {
  code: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['../app.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupComponent), multi: true}],
})
export class CheckboxGroupComponent implements ControlValueAccessor {

  private onChange: any;
  private items: CheckBoxItem[] = [];

  constructor() {
  }

  selectCheckbox(checkbox: CheckBoxItem) {
    this.items = this.items.map((c: CheckBoxItem) => {
      if (c.code === checkbox.code) {
        c = {
          ...c,
          selected: !checkbox.selected,
        };
      }
      return c;
    });
    this.onChange(this.items);
  }

  writeValue(value: CheckBoxItem[]): void {
    this.items = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() {
  }
}
