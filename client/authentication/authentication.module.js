// (function() {
//   'use strict';

  angular
    .module('authentication',[])
    .config(function($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: './authentication/views/login.html',
          controller: 'AuthenticationController'
        })
        .when('/signup', {
          templateUrl: './authentication/views/register.html',
          controller: 'AuthenticationController'
        })

    })
    .config(function($authProvider) {
      $authProvider.loginUrl = 'http://localhost:3000/api/v1/auth/sign_in';
      $authProvider.signupUrl = 'http://localhost:3000/api/v1/auth/';
    })

// }());

require('./authentication.controller')
require('./authentication.service')
