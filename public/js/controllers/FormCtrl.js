angular.module('FormCtrl', []).controller('FormController', function($scope, $http) {

	$scope.user = [
	{name : "Adam"}, 
	{email : "acwiesn@gmail.com"}
	];

	$scope.game = [
		{team : "Philly"},
		{team : "Chicago"}
		];

$http({
	method: "GET",
	URL: "weeklyGames.json"
	}).then(function mySuccess(res){
          $scope.weeklyGames = res.data; 
     }, function myError(res) {
     	$scope.weeklyGames = res.statusText;
     });

});
