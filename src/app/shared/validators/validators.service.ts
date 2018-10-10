import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  readonly baseURL = 'http://localhost:3000/validators';

  constructor(private http: Http) { }

  postContributor(validators) {
    return this.http.post(this.baseURL, validators);
  }
}
