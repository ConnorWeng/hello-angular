'use strict';

angular.module('helloAngularApp')
  .controller('LoginCtrl', function ($scope, loginService) {
      $scope.user = {
          name: '',
          pass: '',
      };
      $scope.login = function () {
          if (loginService.isValidEmail($scope.user.name)) {
              if ($scope.user.name === 'user@example.com' && $scope.user.pass === 'pass') {
                  alert('login success.');
                  return;
              } else {
                  alert('name or password error');
              }
          } else {
              alert('email format error');
          }
      };
  });
