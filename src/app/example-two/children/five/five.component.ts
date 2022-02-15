import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

import {ExampleService} from "../../../service/example/example.service";

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit {
  subject: BehaviorSubject<number>;

  constructor(private router: Router, public example: ExampleService) { }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`])
  }
  toIncrease(): void{
    this.example.increase()
  }
  toDecrease(): void{
    this.example.decrease()
  }
  toReset(): void{
    this.example.reset()
  }
  ngOnInit(): void {
    this.subject = this.example.subject;
  }
}
