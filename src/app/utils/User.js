/**
 * Created by sanchalex on 20.06.16.
 */

(function() {
    'use strict';

    angular
        .module('touristMapReviewFrontend')
        .factory('User', User);


    /** @ngInject */
    function User($localStorage, $http, APIS) {
        function setUserData(user) {
            $localStorage.userData = user;
        }

        function getUserProfile(){
            return $localStorage.userData;
        }

        function logOut() {
            delete $localStorage.userToken;
            delete $localStorage.userData;
        }

        function logIn(token) {
          $localStorage.userToken = token;
        }

        function isLogged() {
            return !!$localStorage.userToken;
        }

        return {
            setUserData: setUserData,
            getUserProfile: getUserProfile,
            logOut: logOut,
            logIn: logIn,
            isLogged: isLogged
        }
    }
})();
