(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Facebook API config
    $authProvider.facebook({
      clientId: '1879375482290028',
      responseType: 'token'
    });


    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = true;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';


    $authProvider.facebook({
      name: 'facebook',
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 580, height: 400 }
    });
    
    // CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }

})();
