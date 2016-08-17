(function() {
  'use strict';

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
    .config(function($httpProvider) {
      $httpProvider.interceptors.push(function($q) {
        return {
          request: function(httpConfig) {
            if(window.localStorage.getItem('access-token')) {
              httpConfig.headers['access-token'] = window.localStorage.getItem('access-token')
              httpConfig.headers['token-type'] = 'Bearer'
              httpConfig.headers['client'] = window.localStorage.getItem('client')
              httpConfig.headers['expiry'] = window.localStorage.getItem('expiry')
              httpConfig.headers['uid'] = window.localStorage.getItem('uid')
            }
            console.log("AFTER", httpConfig)
            return httpConfig
          },

          response: function(res) {
            var tokenInfo = res.headers();
            console.log("TOKEN INFO", tokenInfo)
            window.localStorage.setItem('access-token', tokenInfo['access-token'])
            window.localStorage.setItem('client', tokenInfo['client'])
            window.localStorage.setItem('expiry', tokenInfo['expiry'])
            window.localStorage.setItem('uid', tokenInfo['uid'])
            return res
          }
        }
      })
    })

}());

require('./authentication.controller')
require('./authentication.service')
require('./directives/passwordMatch')
require('./directives/passwordStrength')
