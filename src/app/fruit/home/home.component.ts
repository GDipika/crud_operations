import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allfruits: Fruit[] = [];


  constructor(private _fruitService: FruitService) { }

  ngOnInit(): void {
   this._fruitService.getAll().subscribe((data)=>{
    this.allfruits=data;
   })
  }
  deleteItem(id:number){
    this._fruitService.delete(id).subscribe({
      next: (data)=>{
      this.allfruits=this.allfruits.filter(fruit => fruit.id !=id);
      },
    })
  }
}