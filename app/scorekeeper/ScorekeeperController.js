'use strict';

angular.module('kickballApp.controllers')

	.controller('ScorekeeperController', ['$scope', 'Team', function ( $scope, Team ) {
		$scope.team = Team.getTeam();
		$scope.count = {balls: 0, strikes: 0, fouls: 0};
		$scope.inning = {outs: 0, half: "Top", num: 1};
		$scope.bases = {atBat: $scope.team[1], first: null, second: null, third: null};
		$scope.atBatState = 'pitch';

		$scope.resetCount = function () {
			$scope.count = {balls: 0, strikes: 0, fouls: 0};
		}

	}]);