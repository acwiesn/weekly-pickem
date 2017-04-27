(function () {
    'use strict';

    angular
      .module('app')
      .service('session', [Session]); 
    function Session() { 
        var loggedIn = false;
        this.isLogged = function () {  // controllers can see if a user is logged in or not
            return loggedIn;
        }; 
    }
});
