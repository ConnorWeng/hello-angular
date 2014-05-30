'use strict';

angular.module('helloAngularApp')
  .factory('loginService', function () {
      var loginService = {};
      loginService.isValidEmail = function (email) {
          return ~email.indexOf('@') !== 0;
      };
      return loginService;
  });
