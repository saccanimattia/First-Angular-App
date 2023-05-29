import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PocketBaseService {
  private apiUrl = 'http://127.0.0.1:8090/_/#/collections?collectionId=2k1s6nnmbwgxy49&filter=&sort=-created';

  constructor(private http: HttpClient) { }

  getDatiDalDatabase() {
    return this.http.get(this.apiUrl);
  }
}
