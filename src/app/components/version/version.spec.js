describe('components.version module', function () {
  beforeEach(module('components.version'));

  describe('appVersion directive', function () {
    it('should print version', function () {
      inject(function ($compile, $rootScope) {
        const element = $compile('<app-version></app-version>')($rootScope);
        expect(element.html()).toEqual('v0.0.1');
      });
    });
  });
});
