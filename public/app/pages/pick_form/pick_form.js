(function () {
    'use strict'

    angular.module('app')
        .controller('PickForm', ['$scope', PickForm]);

    function PickForm($scope) {
        console.log("PickForm controller");
    }


})();
