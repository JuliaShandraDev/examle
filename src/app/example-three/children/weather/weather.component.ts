import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {WeatherService} from "../../../service/weather/weather.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherCity$: Observable<any>;
  myRating: FormGroup;
  name = '';
  day = new Date();

  constructor(public weatherService: WeatherService, private fb: FormBuilder, private router: Router) {
  }

  viewWeather(): void {
    this.weatherCity$ = this.weatherService.getCurrentWeather(this.name)
  }

  buildForm(): void {
    this.myRating = this.fb.group({
      rating: [0, Validators.required]
    });
    this.myRating.valueChanges.subscribe(console.log);
  }

  resetForm(): void {
    this.myRating.reset();
  }

  enable(): void {
    this.myRating.enable();
  }

  disable(): void {
    this.myRating.disable();
  }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit() {
    this.buildForm()
  }
}
