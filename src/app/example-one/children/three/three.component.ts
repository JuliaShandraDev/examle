import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ExampleService} from "../../../service/example/example.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
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
