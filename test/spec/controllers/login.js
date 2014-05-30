'use strict';

describe('Controller: LoginCtrl', function () {
    beforeEach(module('helloAngularApp'));

    var loginCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        loginCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
    }));

    it('should have a LoginCtrl controller', function () {
        expect(loginCtrl).not.toBe(null);
    });

    it('should have a working loginService', inject(['loginService', function (loginService) {
        expect(loginService).not.toBe(null);
        expect(loginService.isValidEmail('dddd@bbbb')).toBeTruthy();
        expect(loginService.isValidEmail('bbbb')).toBeFalsy();
    }]));
});
