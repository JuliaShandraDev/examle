import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent {

  constructor(private router: Router) { }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`])
  }
}
