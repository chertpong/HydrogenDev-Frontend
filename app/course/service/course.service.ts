import {Injectable} from 'angular2/core';
import {Course} from '../model/course';
import {COURSES as mockCourse} from './mock-course';

@Injectable()
export class CourseService {
    getAll() : Promise<Course[]> {
        return Promise.resolve(mockCourse);
    }
}