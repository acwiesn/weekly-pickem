(function () {
    'use strict'
    
    angular.module('app')
        .controller('Another', ['$scope', Another]);
    
    function Another($scope) {
        console.log("another controller");
    }
    
    
})();    