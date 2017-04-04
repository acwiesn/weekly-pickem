(function () {
    'use strict'
    
    angular.module('app')
        .controller('Shell', ['$scope', Shell]);
    
    function Shell($scope) {
        console.log("shell controller");
    }
    
    
})();    