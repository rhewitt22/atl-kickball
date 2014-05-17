'use strict';

angular.module('kickballApp.controllers')

	.controller('EditPlayerController', ['$scope', '$routeParams', 'Team',function ( $scope, $routeParams, Team ) {

		$scope.player = {
			id: $routeParams.id
		};

		Team.getFirebase().then(function (response) {
			$scope.team = response.team;
			
			_.each($scope.team, function (element, index, list) {
				if ( $scope.team[index].id == $scope.player.id ) {
					$scope.player = $scope.team[index];
				}
			});
		});
	}]);