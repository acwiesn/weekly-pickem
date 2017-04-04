(function () {
    'use strict'
    
    angular.module('app')
        .controller('Home', ['$scope', Home]);
    
    function Home($scope) {
        console.log("home controller");
    }
    
    
})();    