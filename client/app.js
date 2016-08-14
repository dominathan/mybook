const angular = require('angular')
require('angular-route')
require('satellizer')
require('./authentication/authentication.module')

angular
  .module('mybook',
    [
      'ngRoute',
      'satellizer',
      'authentication'
    ]
  )
  .config(function($routeProvider) {
    $routeProvider.when('/404', {
        template: '<h1>Sorry, page not found</h1>'
      })
      .otherwise({
        redirectTo: '/404'
      });
  })
