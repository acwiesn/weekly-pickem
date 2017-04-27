(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('api/users').then(handleSuccess, handleError('Error getting all users'));
        }
        
        function GetByUsername() {
            return $http.get('api/usersMaped').then(handleSuccess, handleError('Error getting all users'));
        }
        
        function GetByID() {
            return $http.get('api/users/:id').then(handleSuccess, handleError('Error getting all users'));
        }
        
        // private functions

        function handleSuccess(res) {
            console.log(res);
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();