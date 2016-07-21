angular
    .module('app')
    .factory('coursesApi', coursesApi);

function coursesApi($http, userService){
    var factory;

    var apiUrl = 'https://angular-trainging.herokuapp.com/api/';

    factory = {
        getCourses: getCourses,
        getCourse: getCourse,
        login: login, 
        getInstructors: getInstructors,
        createCourse: createCourse
    };

    return factory;

    //////////////////

    function getCourses(){
        return $http.get(apiUrl + 'courses');
    }

    function getCourse(id){
        return $http.get(apiUrl + 'courses/' + id);
    }

    function login(email, password){
        return $http.post(apiUrl + 'login',
            {
                email: email,
                password: password
            }
        )
    }

    function getInstructors(){
        return $http.get(apiUrl + 'instructors');
    }

    function createCourse(course){
        var config = {
            headers: {
                'x-access-token': userService.getToken()
            }
        };
        return $http.post(apiUrl + 'courses', course, config);
    }


}