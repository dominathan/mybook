(function() {
  'use strict';

  angular
    .module('authentication')
    .controller('AuthenticationController', function($scope, $auth, $location) {

      $scope.login = function login(user) {
        if (user.email && user.password) {
          $auth.login({
            email: user.email,
            password: user.password
          })
          .then(function(res) {
            console.log("SUCCESSFUL SIGNIN", res)
            // $location.path('/')
          })
          .catch(function(err) {
              // var message = "<strong> Failed to login: "+ err.data.error +"  </strong>"
              // Flash.create('danger',message,0,{},true);
              console.log("FUCKED UP LOGIN", err)
          })
        }
      }

      $scope.signup = function(user) {
        if(!user.email || !user.password || !user.confirmPassword || user.password !== user.confirmPassword) {
          // flash message that shit isn't work
          return
        }
        $auth.signup({
         email: user.email,
         password: user.password
       })
       .then(function(res) {
         console.log("SUCCesFFUL SIGNUP", res)
        //  $location.path('/login');
       })
       .catch(function(err) {
          //  var message = "<strong> Failed to login: "+ err.data.error +"  </strong>"
          //  Flash.create('danger',message,0,{},true);
          console.log("FUCKED UP SIGNUP", err)
       })
      }

    })

}());
