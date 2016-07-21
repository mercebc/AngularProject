angular
    .module('app')
    .component('courses', {
        templateUrl: 'admin/courses.html',
        controller: 'CoursesController'
    })
    .controller('CoursesController', coursesController);

function coursesController(coursesApi){
    var $ctrl = this;
    $ctrl.title = 'Courses Admin';
    $ctrl.courses = [];

    function activate(){
        coursesApi.getCourses().then(function(response){
            $ctrl.courses = response.data;
        });
    }

    activate();
}