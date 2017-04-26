(function () {
    'use strict'
    
    angular.module('app')
        .controller('Login', ['$scope', '$http', Login]);
    
    function Login($scope, $http) {
        
        $http.get('/profile').then(handleSuccess, handleError('Error getting all users'));

        console.log("login controller");
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
  Login();
  
    
})();    