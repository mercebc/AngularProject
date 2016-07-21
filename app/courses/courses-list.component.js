angular
    .module('app')
    .component('coursesList', {
        templateUrl: 'courses/courses-list.html',
        controller: 'CoursesListController'
    })
    .controller('CoursesListController', coursesList);

    function coursesList(coursesApi){
        var $ctrl = this;
        $ctrl.title = 'Courses list';
        $ctrl.courses = [];

        coursesApi.getCourses().then(assignCourses);

        function assignCourses(res){
            console.log(res);
            $ctrl.courses = res.data;
        }
    }