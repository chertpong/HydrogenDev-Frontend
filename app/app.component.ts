import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {NavigatorComponent} from './home/component/navigator/navigator.component';
import {FooterComponent} from './home/component/footer/footer.component';
import {CourseListComponent} from "./course/component/course-list.component";
import {CourseService} from "./course/service/course.service";

@Component({
    selector: 'my-app',
    template: `
        <navigator></navigator>
        <h1>Hydrogen Dev!</h1>
        <course-list></course-list>
        <footer></footer>
    `,
    directives : [
        ROUTER_DIRECTIVES,
        NavigatorComponent,
        FooterComponent,
        CourseListComponent
    ],
    providers : [
        CourseService
    ]
})
export class AppComponent {

}