(function() {
  'use strict';

  angular
    .module('profile',[])
    .config(function($routeProvider) {
      $routeProvider
        .when('/profile/', {
          templateUrl: './profile/views/profile.html',
          controller: 'ProfileController'
        })
        .when('/profile/edit', {
          templateUrl: './profile/views/edit.html',
          controller: 'ProfileController'
        })
        .when('/profile/new', {
          templateUrl: './profile/views/new.html',
          controller: 'ProfileController'
        })
    })
}());

require('./profile.controller')
require('./profile.service')
