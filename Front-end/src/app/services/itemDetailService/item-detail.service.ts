import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from '../../models/item-detail.model';

@Injectable()
export class ItemDetailService {

  selectedItem: Item;
  // items: ItemDetail[];
  readonly baseURL = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  postItem(itemdetail: Item) {
    return this.http.post(this.baseURL, itemdetail);
  }

  getItemList() {
    return this.http.get(this.baseURL);
  }

  putItem(item: Item) {
    return this.http.put(this.baseURL + `/${item._id}`, item);
  }

  deleteItemDetail(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}