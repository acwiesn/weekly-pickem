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
         .when('/', {
             templateUrl: 'app/pages/home/home.view.html',
             controller: 'Home as vm'
         })
         .when('/entries', {
             templateUrl: 'app/pages/entries/entries.view.html',
             controller: 'Entries as vm'
         })
         .when('/pick_form', {
           templateUrl: 'app/pages/pick_form/pick_form.view.html',
           controller: 'PickForm as vm'
         })
         .otherwise({
             redirectTo: "/"
         });

    }]);


})();
