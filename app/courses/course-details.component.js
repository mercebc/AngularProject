angular
    .module('app')
    .component('courseDetails', {
       templateUrl: 'courses/course-details.html',
       controller: 'CourseDetailsController'
    })
    .controller('CourseDetailsController', CourseDetailsController);

function CourseDetailsController(coursesApi){
    var myVar = this;
    myVar.course = null;

    this.$routerOnActivate = function(next){
        console.log('next', next);
        myVar.courseId = next.params.id;
        coursesApi.getCourse(myVar.courseId).then(function(res){
            myVar.course = res.data;
        });
    }
}