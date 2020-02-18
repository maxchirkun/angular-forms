import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {map} from 'rxjs/operators';
import {CheckBoxItem} from '../shared/checkbox-group.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements OnInit {

  items = this.fb.control([]);

  itemsValue$ = this.items.valueChanges
    .pipe(
      map(items => {
        const result = {};
        items.forEach(item => {
          result[item.code] = item.selected;
        });
        return result;
      }),
    );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const items: CheckBoxItem[] = [
      {
        code: 'first',
        name: 'One',
        selected: false,
      },
      {
        code: 'second',
        name: 'Two',
        selected: false,
      },
      {
        code: 'third',
        name: 'Three',
        selected: false,
      },
      {
        code: 'fourth',
        name: 'Four',
        selected: true,
      },
    ];
    this.items.setValue(items);
    // this.items = this.fb.control(items);
  }
}
