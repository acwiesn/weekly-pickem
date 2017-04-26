(function () {
    'use strict'
    
    angular.module('app')
        .controller('Register', ['$scope', Login]);
    
    function Register($scope) {
        console.log("register controller");
    }
    
    
})();    