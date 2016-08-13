var angular = require('angular')
var angularRoute = require('angular-route')
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
