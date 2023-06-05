import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private _fruitService: any;
  allfruits: any;


  constructor(private _httpClient: HttpClient) { }
  getAll() {
    return this._httpClient.get<Fruit[]>('http://localhost:3000/fruits');
  }
  create(data: Fruit) {
    return this._httpClient.post('http://localhost:3000/fruits', data);
  }
  edit(id: number) {
    return this._httpClient.get<Fruit>('http://localhost:3000/fruits/' + id);
  }
  update(data: Fruit) {
    return this._httpClient.put<Fruit>('http://localhost:3000/fruits/' + data.id, data);
  }
  delete(id: number) {
    return this._httpClient.delete<Fruit>('http://localhost:3000/fruits/' + id);
  }

}





export { Fruit };

