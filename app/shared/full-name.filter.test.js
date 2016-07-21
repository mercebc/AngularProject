describe('fullName Filter', function (){
  var filter;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
      filter = $injector.get('$filter')('fullName');
  }));

  it('Should concatenate the name and surname', function(){
      var person = {
          name: 'John',
          surname: 'Smith'
      };

      expect(filter(person)).toEqual('John Smith');
  });
    
    it('Should not concatenate name and surname as not available', function(){
        var noPerson = {
            wheels: 4
        }
        expect(filter(noPerson)).toEqual(noPerson);
    });
});