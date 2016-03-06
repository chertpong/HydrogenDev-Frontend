var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var navigator_component_1 = require('./home/component/navigator/navigator.component');
var footer_component_1 = require('./home/component/footer/footer.component');
var course_list_component_1 = require("./course/component/course-list.component");
var course_service_1 = require("./course/service/course.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <navigator></navigator>\n        <h1>Hydrogen Dev!</h1>\n        <course-list></course-list>\n        <footer></footer>\n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                navigator_component_1.NavigatorComponent,
                footer_component_1.FooterComponent,
                course_list_component_1.CourseListComponent
            ],
            providers: [
                course_service_1.CourseService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map