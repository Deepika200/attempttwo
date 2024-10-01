import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './categories.model';
// import {}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpclient:HttpClient) { }
  private dataurl= 'assets/mock-data.json'
  getCategories(): Observable<Categories[]> {
    return this.httpclient.get<Categories[]>(this.dataurl);
  }
}
