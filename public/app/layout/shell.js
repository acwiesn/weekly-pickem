(function () {
    'use strict'
    
    angular.module('app')
        .controller('Shell', ['$scope', '$rootScope', '$location', '$route', 'session', Shell]);
    
    function Shell($scope, $rootScope, $location, $route, session) {
        
        $rootScope.$on('$routeChangeStart', function (event, next, current) {  
             if ($route.current.$$route.secure && !session.isLogged()) { 
        
                $location.path("/loginPage");
            } 
        });
        
        console.log("shell controller");
    }
    
    
})();    