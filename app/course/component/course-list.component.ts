import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

import {CourseService} from "../service/course.service";
import {Course} from "../model/course";

@Component({
    selector:'course-list',
    templateUrl:'/app/course/component/course-list.component.html',
    styleUrls: ['/app/course/component/course-list.component.css']
})
export class CourseListComponent implements OnInit{
    courses:Course[];

    constructor(private _courseService : CourseService){}

    ngOnInit():any {
        return this._courseService.getAll().then(courses => this.courses = courses);
    }
}