angular
    .module('app')
    .factory('userService', userService);

function userService($window) {
    var service = {
        setToken: setToken,
        getToken: getToken
    };
    return service;

    ////////////////

    function setToken(token) {
        $window.sessionStorage.setItem('token', token);
    }

    function getToken(){
        return $window.sessionStorage.getItem('token') || null;
    }
}

