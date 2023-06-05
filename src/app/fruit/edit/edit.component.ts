import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit, FruitService } from '../fruit.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(private _fruitService: FruitService, private router: Router,
    private route: ActivatedRoute) { }
  formdata: Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.queryParams['id'])
    this.getByid(id)
  }
  getByid(id: number) {
    this._fruitService.edit(id).subscribe((data: any) => {
      this.formdata = data;
    })
  }
  update() {
    this._fruitService.update(this.formdata).subscribe({
      next: (data: any) => {
        this.router.navigate(["/home"]);
      },
      error: (er: any) => {
        console.log(er)
      }
    })
  }
}
