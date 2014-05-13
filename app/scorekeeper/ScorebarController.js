'use strict';

angular.module('kickballApp.controllers')

	.controller('ScorebarController', ['$scope', 'Team', 'Games', function ( $scope, Team, Games ) {

		$scope.game = Games.getSoonestGame();

		if($scope.game.home) {
			$scope.game.homeTeam = "ALC";
			$scope.game.awayTeam = $scope.game.abbrev;
		} else {
			$scope.game.homeTeam = $scope.game.abbrev;
			$scope.game.awayTeam = "ALC";
		}
	}]);