(function (){
    'use strict';

    angular
        .module('app', ['ngComponentRouter'])
        .config(function($locationProvider){
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'myApp')
        .component('myApp', {
            templateUrl: 'app/app.tpl.html',
            controller: 'AppController',
            $routeConfig: [
                {path: '/', name: 'CoursesList', component: 'coursesList', useAsDefault: true},
                {path: '/details/:id', name: 'CourseDetails', component: 'courseDetails'},
                {path: '/login', name: 'Login', component: 'login'},
                {path: '/courses-admin', name: 'CoursesAdmin', component: 'courses'},
                {path: '/new-course', name: 'NewCourse', component: 'newCourse'}
            ]
        });

})();