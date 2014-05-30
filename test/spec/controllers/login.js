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
});
