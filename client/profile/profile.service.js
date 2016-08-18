(function() {
  'use strict';

  angular
    .module('profile')
    .factory('ProfileService', function() {

      return {
        editProfile: editProfile,
        createProfile: createProfile
      }

      function createProfile(profile) {
        return $http.post('http://localhost:3000/api/v1/profile/create', profile)
      }

      function editProfile(profile) {
        return $http.put('http://localhost:3000/api/v1/profile/edit', profile)
      }
      
    })
}());
