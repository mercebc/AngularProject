angular
    .module('app')
    .component('courseItem', {
       bindings: {
           course: '<'
       },
        templateUrl: 'courses/course-item.html'
    });