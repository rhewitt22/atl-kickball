'use strict';

angular.module('kickballApp.controllers')

	.controller('AttendanceController', ['$scope', 'Team', 'Games', function ( $scope, Team, Games ) {

		$scope.team = Team.getTeam();
		$scope.nearestGame = Games.getSoonestGame();
		$scope.newPlayer = {index: $scope.team.length};

		$scope.addPlayer = function ( newPlayer ) {
			if (!newPlayer.gender) {
				newPlayer.gender = "no-gender";
			} else {
				newPlayer.gender = newPlayer.gender.toLowerCase();
			}
			$scope.team.splice(newPlayer.index, 0, newPlayer);
			$scope.newPlayer = {index: $scope.team.length};
			$scope.ballerForm.$setPristine();
		};

		$scope.removePlayer = function ( index ) {
			$scope.team.splice(index ,1);
		};

		$scope.randomLineup = function () {
			$scope.team = Team.getTeam();
		}

	}]);