import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {

  constructor(private router: Router) { }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`])
  }
}
