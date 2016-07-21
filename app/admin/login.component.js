angular
    .module('app')
    .component('login', {
       controller: 'LoginController',
       templateUrl: 'admin/login.html' 
    })
    .controller('LoginController', loginController);

function loginController(coursesApi, userService, $rootRouter){
    var $ctrl = this;
    $ctrl.login = login;

    function login(email, password){
        coursesApi.login(email, password).then(function(response){
            userService.setToken(response.data.token);

            // once we have the token we navigate to the Courses Admin page
            $rootRouter.navigate(['CoursesAdmin']);
        });
    }

}