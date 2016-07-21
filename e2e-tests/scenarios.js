describe ('index', function(){

  var promiseValue;
  

  it('Should has / as path and have a title', function);
  browser.get('/');
  expect(browser.getLocationAbsUrl()).toMatch('/');
  expect(element(by.tagname('h1')).getText()).toEqual('Courses list');
  expect(element.all(by.css('.list-group-item')).count()).toEqual(11);
  });
});
