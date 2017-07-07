(function () {
    'use strict';



    angular.module('app', [
        //angular
       'ngRoute',
       'ui.bootstrap'

    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

      $locationProvider.hashPrefix('');

       $routeProvider
        .when('/loginPage', {
           templateUrl: 'app/pages/login/loginPage.view.html',
           controller: 'Login as vm',
           secure: false
         })
         .when('/', {
             templateUrl: 'app/pages/home/home.view.html',
             controller: 'Home as vm',
             secure: true
         })
         .when('/entries', {
             templateUrl: 'app/pages/entries/entries.view.html',
             controller: 'Entries as vm',
             secure: true
         })
         .when('/pick_form', {
           templateUrl: 'app/pages/pick_form/pick_form.view.html',
           controller: 'PickForm as vm',
             secure: true
         })
         .otherwise({
             redirectTo: "/"
         });

    }]);


})();
