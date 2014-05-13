'use strict';

angular.module('kickballApp.controllers')

	.controller('CurrentplayController', ['$scope', function ( $scope ) {
		$scope.hit = function () {
			$scope.atBatState = 'hit';
		};
		$scope.cancel = function () {
			$scope.atBatState = 'pitch';
		};
		$scope.strike = function () {

			// If there are less than two strikes, add a strike
			if ($scope.count.strikes < 2) {
				$scope.count.strikes += 1;
			} else {  // 3 strikes, batter is out
				if ($scope.inning.outs < 2){
					$scope.inning.outs += 1;
					$scope.resetCount();
			} else { // 3 outs, inning is over
					$scope.inning.outs = 0;
					if ($scope.inning.half === "Top") {
						$scope.inning.half = "Bottom";
						$scope.inning.outs = 0;
						$scope.resetCount();
					} else {
						$scope.inning.half = "Top";
						$scope.inning.outs = 0;
						$scope.inning.num += 1;
						$scope.resetCount();
					}
				}
			}
		};

		$scope.ball = function () {
			if ($scope.count.balls < 3) {
				$scope.count.balls += 1;
			} else {
				$scope.resetCount();
			}
		};

		$scope.foul = function () {
			if ($scope.count.fouls < 3){
				$scope.count.fouls += 1;
				if ($scope.count.strikes < 2){
					$scope.count.strikes += 1;
				}
			} else if ($scope.count.fouls === 3){
				if ($scope.inning.outs < 2) {
					$scope.inning.outs += 1;
				} else {
					$scope.inning.num += 1;
				}
				$scope.resetCount();
			}
		};

		$scope.out = function () {
			$scope.resetCount();
			if ($scope.inning.outs < 2){
				$scope.inning.outs += 1;
			} else {
				if ($scope.inning.half === "Top"){
					$scope.inning.half = "Bottom";
					$scope.inning.outs = 0;
				} else {
					$scope.inning.half = "Top";
					$scope.inning.num += 1;
					$scope.inning.outs = 0;
				}
			}
		};

	}]);