import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import {IRating} from "../../../interface/rating.interface";


@Component({
  selector: 'app-custom-rating',
  templateUrl: './custom-rating.component.html',
  styleUrls: ['./custom-rating.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRatingComponent),
      multi: true
    }]
})
export class CustomRatingComponent implements ControlValueAccessor {
  public value: number;
  public selectedId = 0;
  public ratingLabel: string;
  public disabled: boolean;
  public ratings: IRating[] = [
    {
      level: 1,
      label: "Bad"
    },
    {
      level: 2,
      label: "Medium"
    },
    {
      level: 3,
      label: "Average"
    },
    {
      level: 4,
      label: "Good"
    },
    {
      level: 5,
      label: "Excellent"
    }
  ];

  public onChanged: any = () => {}
  public onTouched: any = () => {}

  // the method below is mandatory
  public writeValue(value: any) {
    this.value = value;
  }

  // the method below is mandatory
  // We must call onChanged when the value changes in the UI to update the value (see line 79)
  public registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  // the method below is mandatory
  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // the method below is optional
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Custom methods...
  // public setRating(selection: IRating) {
  public setRating(idx: number) {
    this.value = idx + 1;
  }

  public setCurrentLabel(rating: IRating): void {
    this.ratingLabel = !this.disabled ? rating.label : "";
  }

  public clearCurrentLabel(): void {
    this.ratingLabel = "";
  }

  public isActive(rating: IRating):boolean{
    return rating.level <= this.value
  }
}
