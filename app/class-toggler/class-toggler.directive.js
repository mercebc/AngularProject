angular
    .module('app')
    .directive('classToggler', classToggler);

function classToggler(){
    var directive = {
        restrict: 'AE', // default attribute and element
        link: link,
        scope: {
            style: '=myStyle'
        }
    }

    return directive;

    function link(scope, elem, attr){
        elem.bind('click', changeClass);

        function changeClass(){
            if(elem.hasClass(scope.style)){
                elem.removeClass(scope.style);
            }else{
                elem.addClass(scope.style);
            }
        }

    }
}

