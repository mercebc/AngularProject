angular
    .module('app')
    .filter('fullName', fullNameFilter);

function fullNameFilter(){
    return function(person){
        var output = person;

        if(person.name && person.surname){
            output = person.name + ' ' + person.surname;
        }

        return output;
    }
}