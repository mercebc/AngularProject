describe('class-toggler', function(){
    var element, scope;

    beforeEach(module('app'));

    beforeEach(inject(function($injector){
        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        $compile = $injector.get('$compile');
        scope.style = 'alert alert-danger';
        element = angular.element('<div class-toggler my-style="style"></div>');
        $compile(element)(scope);
        scope.$digest();
    }));

    it('should not hve the class yet', function(){
        expect(element.hasClass(scope.style)).toBeFalsy();
    });

    it('should add a class to the element after clicking on it', function(){
        element.triggerHandler('click');
        expect(element.hasClass(scope.style)).toBeTruthy();
        element.triggerHandler('click');
        expect(element.hasClass(scope.style)).toBeFalsy();
    });

});