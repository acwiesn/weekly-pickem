(function () {
    'use strict';



    angular.module('app', [
        //angular
       'ngRoute',
       'ui.bootstrap'

    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

       $routeProvider
         .when('/', {
             templateUrl: 'app/pages/home/home.view.html',
             controller: 'Home as vm'
         })
         .when('/another_page', {
             templateUrl: 'app/pages/another_page/another_page.view.html',
             controller: 'Another as vm'
         })
         .otherwise({
             redirectTo: "/"
         });

        $locationProvider.html5Mode(true);



    }]);


})();
