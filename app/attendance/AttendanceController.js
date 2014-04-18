'use strict';

angular.module('kickballApp.controllers')

	.controller('AttendanceController', ['$scope', 'Team', 'Games', function ( $scope, Team, Games ) {

		$scope.team = Team.getTeam();
		$scope.nearestGame = Games.getSoonestGame();
		$scope.newPlayer = {};

		$scope.addPlayer = function ( newPlayer ) {
			if (newPlayer.firstName) {
				$scope.team.push(newPlayer);
				$scope.newPlayer = {};
			}
		};

		$scope.removePlayer = function ( index ) {
			$scope.team.splice(index ,1);
		};

	}]);