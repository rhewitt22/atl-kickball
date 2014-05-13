'use strict';

angular.module('kickballApp.services')

	.factory('Lineup', ['$q', function ( $q ) {
		var lineup;

		var setLineup = function ( team ) {
			console.log('Setting lineup...');
			lineup = team;
		};

		var getLineup = function () {
			var deferred = $q.defer();
			deferred.resolve(lineup);
			console.log('Getting lineup...');
			return deferred.promise;
		};

		return {
			getLineup:getLineup,
			setLineup:setLineup
		};
	}]);