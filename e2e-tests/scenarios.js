'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /filter when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/filter");
  });


  describe('filter', function() {

    beforeEach(function() {
      browser.get('index.html#/filter');
    });


    it('should render filter when user navigates to /filter', function() {
      expect(element.all(by.css('[ng-views] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-views] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
