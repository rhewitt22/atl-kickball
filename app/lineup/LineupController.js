'use strict';

angular.module('kickballApp.controllers')

	.controller('LineupController', ['$scope', 'Lineup', 'Team', function ( $scope, Lineup, Team ) {

		Lineup.getLineup().then(function (response) {

			if (response) {
				$scope.team = response;
			} else {
				Team.getTeam().then(function (response) {
					$scope.team = response;
				})
			}
		});

		$scope.setLineup = function (team) {
			Lineup.setLineup(team);
		};

	}]);