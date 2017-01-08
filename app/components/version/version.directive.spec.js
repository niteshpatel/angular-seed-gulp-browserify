describe('myApp.version module', function () {
    beforeEach(module('myApp.version'));

    describe('app-version directive', function () {
        it('should print version', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<app-version></app-version>')($rootScope);
                expect(element.html()).toEqual('v0.0.1');
            });
        });
    });
});
