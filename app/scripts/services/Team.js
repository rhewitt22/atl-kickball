'use strict';

angular.module('kickballApp.services')

	.factory('Team', ['$q', function ( $q ) {
		
		var getTeam = function() {
			var deferred = $q.defer(),
				team = [
					{firstName: 'Roy', lastName: 'Hewitt', gender: 'male'},
					{firstName: 'Alessandro', lastName: 'Salvo', gender: 'male'},
					{firstName: 'Alfonso', lastName: 'Savage', gender: 'male'},
					{firstName: 'Brandon', lastName: 'Holtzclaw', gender: 'male'},
					{firstName: 'Jody', lastName: 'Wingo', gender: 'male'},
					{firstName: 'Malone', lastName: 'Allen', gender: 'male'},
					{firstName: 'Matt', lastName: 'Woodruff', gender: 'male'},
					{firstName: 'Chris', lastName: 'Cravey', gender: 'male'},
					{firstName: 'Nick', lastName: 'Holtzclaw', gender: 'male'},
					{firstName: 'Caty', lastName: 'Clements', gender: 'female'},
					{firstName: 'Elizabeth', lastName: 'Harwood', gender: 'female'},
					{firstName: 'Christie', lastName: 'Zablocki', gender: 'female'},
					{firstName: 'Rameka', lastName: 'Price', gender: 'female'},
					{firstName: 'Brittney', lastName: 'Williams', gender: 'female'}
				].sort(function() { return 0.5 - Math.random(); }); // Randomize

			console.log('Getting team...');
			deferred.resolve(team);
			return deferred.promise;
		};

		return {
			getTeam: getTeam
		};
	}]);