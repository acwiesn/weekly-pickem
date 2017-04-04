angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/entries', {
			templateUrl: 'views/entries.html',
			controller: 'EntryController'
		})

		.when('/pickForm', {
			templateUrl: 'views/pickForm.html',
			controller: 'FormController'	
		});

	$locationProvider.html5Mode(true);

}]);