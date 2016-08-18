(function() {
  'use strict';

  angular
    .module('profile')
    .controller('ProfileController', function($scope, ProfileService) {

      $scope.editProfile = function(profile) {
        ProfileService.editProfile(profile)
          .then(function(data) {
            console.log("success edit profile", data)
          })
          .catch(function(err) {
            console.log("fail edit profile", err)
          })
      }

      $scope.createProfile = function(profile) {
        ProfileService.createProfile(profile)
          .then(function(data) {
            console.log("success edit profile", data)
          })
          .catch(function(err) {
            console.log("fail edit profile", err)
          })
      }

    })

}());
