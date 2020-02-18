import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

interface Country {
  id: number;
  name: string;
  cities: City[];
}

interface City {
  id: number;
  name: string;
}

interface Location {
  countryName: string;
  cityName: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../app.component.scss']
})
export class SelectComponent {

  public selectForm: FormGroup = this.fb.group({
    country: this.fb.control({}),
    city: this.fb.control({}),
  });
  readonly selectedValue$: Observable<Location> =
    this.selectForm.valueChanges
      .pipe(
        map((value: { country: Country, city: City }) => {
          return {
            countryName: value.country.name,
            cityName: value.city.name
          };
        }),
      );

  readonly countries$: Observable<Country[]> = of([
    {
      id: 1,
      name: 'Belarus',
      cities: [
        {
          id: 1,
          name: 'Minsk'
        },
        {
          id: 2,
          name: 'Grodno'
        },
        {
          id: 3,
          name: 'Vitebsk'
        },
        {
          id: 4,
          name: 'Brest'
        }
      ]
    }, {
      id: 2,
      name: 'Russia',
      cities: [
        {
          id: 5,
          name: 'Moscow'
        },
        {
          id: 6,
          name: 'Saint-Petersburg'
        },
      ]
    }
  ]);

  readonly cities$: Observable<City[]> =
    this.countryFormControl.valueChanges
      .pipe(
        map(selectedCountry => {
          // {emitEvent: false}
          this.cityFormControl.reset({});
          return selectedCountry.cities;
        }),
      );

  constructor(private fb: FormBuilder) {
  }

  get cityFormControl() {
    return this.selectForm.get('city');
  }

  get countryFormControl() {
    return this.selectForm.get('country');
  }
}
