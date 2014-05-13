'use strict';

angular.module('kickballApp.controllers')

	.controller('AttendanceController', ['$scope', 'Team', 'Games', 'Lineup', function ( $scope, Team, Games, Lineup ) {

		Lineup.getLineup().then(function (response) {

			if (response) {
				$scope.team = response;
			} else {
				Team.getTeam().then(function (response) {
					$scope.team = response;
				})
			}

			$scope.newPlayer = {index: $scope.team.length};
		});

		$scope.nearestGame = Games.getSoonestGame();
		

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
			$scope.newPlayer.index = $scope.team.length;
		};

		$scope.randomLineup = function () {
			if (!$scope.refreshTeam){
				// Randomize remaining players in the list (those who haven't been removed)
				$scope.team = $scope.team.sort(function() { return 0.5 - Math.random(); });
			} else {
				// Return random list of all players
				$scope.team = Team.getTeam();
			}
		}

		// Move element up the list vertically (lower index)
		$scope.moveUp = function ( index ) {
			
			if (!index) {
				return; // don't change index to -1
			} else {
				var player = $scope.team[index];
				$scope.team.splice(index, 1);
				$scope.team.splice(index - 1, 0, player);
				return true;
			}
			
		};

		// Move element down the list vertically (increase index)
		$scope.moveDown = function ( index ) {
			var player = $scope.team[index];
			$scope.team.splice(index, 1);
			$scope.team.splice(index + 1, 0, player);
			return true;
		};

		$scope.saveLineup = function ( team ) {
			$scope.lineup = team;
			return true;
		};

		$scope.setLineup = function ( team ) {
			Lineup.setLineup(team);
		};

	}]);