(function () {
    'use strict'

    angular.module('app')
        .controller('Shell', ['$scope', '$rootScope', '$location', '$route', 'session', Shell]);

    function Shell($scope, $rootScope, $location, $route, session) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
          debugger;
             if ( next.$$route.secure && !session.isLogged()) {

                $location.path("/loginPage");
            }
        });
        //$route.current.$$route.secure
        console.log("shell controller");
    }


})();
