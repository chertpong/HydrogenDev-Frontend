import {Course} from '../model/course';

export var COURSES : Course[] = [
    new Course(
        1,
        'Java starer pack',
        180,
        3000.0,
        'Java for beginner',
        'http://xahlee.info/UnixResource_dir/gki/Java_logo_new.svg',
        ['Java','Beginner']
    ),
    new Course(
        2,
        'Java OOP',
        180,
        3000.0,
        'Java for intermediate practitioner',
        'http://xahlee.info/UnixResource_dir/gki/Java_logo_new.svg',
        ['Java','Intermediate']
    ),
    new Course(
        3,
        'NodeJS - First web application - Starter pack',
        240,
        4000.0,
        'Nodejs made easy',
        'http://www.programwitherik.com/content/images/2015/04/nodejs-logo.png',
        ['Nodejs','Beginner']
    )
];