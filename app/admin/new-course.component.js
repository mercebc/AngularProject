angular
	.module('app')
	.component('newCourse', {
			templateUrl: 'admin/new-course.html',
			controller: 'NewCourseController'
	})
	.controller ('NewCourseController', NewCourseController);

function NewCourseController(coursesApi){
	var $ctrl = this;

	$ctrl.instructors = [];
	$ctrl.createCourse = createCourse;

	function activate(){
		coursesApi.getInstructors().then(assignate);

		function assignate(res){
			$ctrl.instructors = res.data;
			console.log('instructors',$ctrl.instructors);
		}
	}

	function createCourse(course) {
		console.log('Course:', course);
		coursesApi.createCourse(course).then(function(response){
				console.log('New Course:', response);

		})
		.catch(function(error){
			console.log ('Error creating course', error);
		});
		

	}
	
	activate();

}