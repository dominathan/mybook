(function() {
  'use strict';

  angular
    .module('landing',[])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './landing/views/home.html',
          controller: 'LandingController'
        })

    })

}());

require('./landing.controller')
