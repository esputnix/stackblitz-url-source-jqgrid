import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  jsonFile = '../assets/users.txt';

  getData(params) {
    console.log("HttpService: got params:", params);

    return this.http.get(this.jsonFile)
  }
}