import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  readonly baseURL = 'http://localhost:3000/contributors';

  constructor(private http: Http) { }

  postContributor(contributors) {
    return this.http.post(this.baseURL,contributors);
  }
}
