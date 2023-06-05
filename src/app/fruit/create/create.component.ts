import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit, FruitService } from '../fruit.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private _fruitService: FruitService, private router: Router) { }
  formdata: Fruit = {
    id: 0,
    name:'' ,
    quantity: 0,
    price: 0,
  }
  create() {
    console.log("enter");
    this._fruitService.create(this.formdata).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(["/home"]);
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
}
