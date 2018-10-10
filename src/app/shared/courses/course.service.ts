import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  readonly baseURL = 'http://localhost:3000/courses';

  constructor(private http: Http) { }

  postContributor(courseDetails) {
    return this.http.post(this.baseURL,courseDetails);
  }
}
