import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  public subject = new BehaviorSubject<number>(0);
  value: number = 0;

  increase(): void{
    this.value = this.subject.getValue()+1;
    this.subject.next(this.value);
  }
  decrease(): void{
    this.value = this.subject.getValue()-1;
    this.subject.next(this.value);
  }
  reset(): void{
    this.subject.next(0);
  }

}
