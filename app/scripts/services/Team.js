/*global Firebase:false */
'use strict';

angular.module('kickballApp.services')

	.factory('Team', ['$q', function ( $q ) {

		var getFirebase = function () {
			var teamRef = new Firebase('https://glaring-fire-970.firebaseIO.com');

			var deferred = $q.defer();
			teamRef.on('value', function(snapshot) {
				deferred.resolve(snapshot.val());
			});
			
			return deferred.promise;
		};

		return {
			getFirebase: getFirebase
		};
	}]);