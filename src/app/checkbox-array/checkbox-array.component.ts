import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {CheckBoxItem} from '../shared/checkbox-group.component';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-checkbox-array',
  templateUrl: './checkbox-array.component.html',
  styleUrls: ['../app.component.scss']
})
export class CheckboxArrayComponent implements OnInit {

  checkBoxesFormGroup = this.fb.group({
    items: this.fb.array([]),
  });

  private items = new BehaviorSubject<CheckBoxItem[]>([]);
  readonly items$ = this.items.asObservable();

  itemsValue$ = this.itemsFormArray.valueChanges
    .pipe(
      map((items: boolean[]) => {
        const result = {};
        items.forEach((value, index) => {
          result[this.items.value[index].code] = value;
        });
        return result;
      }),
    );

  constructor(private fb: FormBuilder) {
  }

  get itemsFormArray(): FormArray {
    return this.checkBoxesFormGroup.get('items') as FormArray;
  }

  ngOnInit() {
    const receivedItems: CheckBoxItem[] = [
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
    receivedItems.forEach((item) => {
      this.itemsFormArray.push(this.fb.control(item.selected));
      // this.itemsFormArray.insert(index, this.fb.control(item.selected));
      // this.itemsFormArray.setControl(index, this.fb.control(item.selected));
    });
    this.items.next(receivedItems);
  }
}
