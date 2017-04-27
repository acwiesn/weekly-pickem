(function () {
    'use strict'
    
    angular.module('app')
        .controller('Login', ['$scope', '$http', Login]);
    
    function Login($scope, $http) {
        
        $http.get('/login').then(handleSuccess, handleError('Error logging in'));
    }
        
    function Logout($scope, $http) {
            return $http.get('/logout').then(handleSuccess, handleError('Error logging out'));
        }
    
  function handleSuccess(res) {
            console.log(res.data);
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
  
})();    