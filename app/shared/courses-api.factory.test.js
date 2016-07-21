describe('courses-api', function (){
  var service;
  var $httpBackend;
  var url = 'https://angular-trainging.herokuapp.com/api/';
  var mockCourses = ['test1', 'test2'];
  var mockCourse = {name: 'test'};
  var promiseResult = null;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    service = $injector.get('coursesApi');
    $httpBackend = $injector.get('$httpBackend');
    promiseResult = null;
  }));

  function setPromiseValue(value){
    promiseResult = value;
  }

  it('Should get all the courses', function(){
    $httpBackend.whenGET(url + 'courses').respond(200, mockCourses);
    service.getCourses().then(setPromiseValue);
    $httpBackend.flush();
    expect(promiseResult.status).toEqual(200);
    expect(promiseResult.data).toEqual(mockCourses);
  });

  it('Should get just one selected course', function(){
    $httpBackend.whenGET(url + 'courses/555').respond(200, mockCourse);
    service.getCourse('555').then(setPromiseValue);
    $httpBackend.flush();
    expect(promiseResult.status).toEqual(200);
    expect(promiseResult.data).toEqual(mockCourse);
  });
});