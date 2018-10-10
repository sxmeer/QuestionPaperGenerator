import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../shared/courses/course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  list = [];
  course = {
    subName: "",
    subId:0,
    sem:0,
    dept:"",
    marksType: "",
    numberOfModules: 0,
    moduleDetails: []
  }
  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }
  addModule() {
    this.list = [];
    this.course.moduleDetails = new Array(this.course.numberOfModules);
    for (var i = 1; i <= this.course.numberOfModules; i++) {
      this.list.push(i);
    }
  }
  onSubmit() {
    this.courseService.postContributor(this.course).subscribe((res) => {
      console.log(JSON.stringify(res, undefined, 2));
    })
  }
}
