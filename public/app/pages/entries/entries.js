(function () {
    'use strict'

    angular.module('app')
        .controller('Entries', ['$scope', Another]);

    function Another($scope) {
        console.log("Entries controller");
    }


})();
