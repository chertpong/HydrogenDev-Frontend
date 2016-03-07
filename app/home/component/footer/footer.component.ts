import {Component} from 'angular2/core';

@Component({
    selector : 'custom-footer',
    template : require<any>('./footer.component.html'),
    styles : [ require<any>('./footer.component.scss') ]
})
export class FooterComponent {

}