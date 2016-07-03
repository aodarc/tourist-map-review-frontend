/**
 * Created by sanchalex on 20.06.16.
 */
(function() {
    'use strict';

    angular
        .module('touristMapReviewFrontend')
        .factory('APIS', APIS);
        //.factory('AuthInterceptor', AuthInterceptor);

    // APIS.$inject = ['API_ROOT_URL', '$http'];

    /** @ngInject */
    function APIS(API_ROOT_URL, $http) {
        function signIn(credentials) {
            return $http.post(API_ROOT_URL + '/sign_in', credentials);
        }

        function getAccountInfo(){
            return $http.get(API_ROOT_URL + '/account')
        }

        function signUp(body) {
            return $http.post(API_ROOT_URL + '/sign_up', body);
        }

        function getAllReviews() {
            return $http.get(API_ROOT_URL + '/reviews');
        }

        function createReview(body) {
            // multipart/form-data
            return $http.post(API_ROOT_URL + 'reviews', body);
        }

        function getNearestReviews(address) {
            return $http.get(API_ROOT_URL + '/reviews/nearest?address=' + address);
        }

        function getMostVisibleReviews() {
            return $http.get(API_ROOT_URL + '/reviews/most_visited');
        }

        function getReview(review_id) {
            return $http.get(API_ROOT_URL + '/reviews/' + review_id);
        }

        function createLikeForReview(review_id) {
            return $http.post(API_ROOT_URL + '/reviews/' + review_id + '/likes');
        }

        function createBookmark(body) {
            return $http.post(API_ROOT_URL + '/account/bookmarks', body);
        }


        function getVideoFromVimeo(url) {
            return $http.get('https://vimeo.com/api/oembed.json?url=' + url);
        }

        function getUserLocation (coords){
            return $http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords.lat +"," + coords.lon + "&sensor=true")
        }

        return {
            signIn: signIn,
            getAccountInfo: getAccountInfo,
            signUp: signUp,
            getAllReviews: getAllReviews,
            createReview: createReview,
            getNearestReviews: getNearestReviews,
            getMostVisibleReviews: getMostVisibleReviews,
            getReview: getReview,
            createLikeForReview: createLikeForReview,
            createBookmark: createBookmark,
            getVideoFromVimeo: getVideoFromVimeo,
            getUserLocation: getUserLocation
        }
    }

    // AuthInterceptor.$inject = ['$localStorage', '$location', '$injector', '$q'];
    /** @ngInject */
    // function AuthInterceptor($localStorage, $location, $injector, $q) {
    //     return {
    //         request: function(config) {
    //             var getUrl = config.url;
    //             var notRootUrlVimeo = getUrl.includes("https://vimeo.com");
    //             var notRootUrGoogle = getUrl.includes("http://maps.googleapis.com");
    //             var user_token = $localStorage.userToken;
    //             if (user_token && !notRootUrlVimeo && !notRootUrGoogle) {
    //                 config.headers['Authentication-Token'] = user_token;
    //             }
    //             return config;
    //         },
    //         responseError: function(response) {
    //             var def = $q.defer();
    //             if (response.status === 401) {
    //                 var User = $injector.get('User');
    //                 User.logOut();
    //                 $location.url('/login')
    //             }
    //
    //             def.reject(response);
    //             return def.promise;
    //         }
    //     }
    // }
}());
