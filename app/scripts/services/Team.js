'use strict';

angular.module('kickballApp.services')

	.factory('Team', function() {
		
		var getTeam = function() {
			return [
				{firstName: 'Roy', lastName: 'Hewitt', gender: 'male', hide: false},
				{firstName: 'Alessandro', lastName: 'Salvo', gender: 'male', hide: false},
				{firstName: 'Alfonso', lastName: 'Savage', gender: 'male', hide: false},
				{firstName: 'Brandon', lastName: 'Holtzclaw', gender: 'male', hide: false},
				{firstName: 'Jody', lastName: 'Wingo', gender: 'male', hide: false},
				{firstName: 'Malone', lastName: 'Allen', gender: 'male', hide: false},
				{firstName: 'Matt', lastName: 'Woodruff', gender: 'male', hide: false},
				{firstName: 'Chris', lastName: 'Cravey', gender: 'male', hide: false},
				{firstName: 'Nick', lastName: 'Holtzclaw', gender: 'male', hide: false},
				{firstName: 'Caty', lastName: 'Clements', gender: 'female', hide: false},
				{firstName: 'Elizabeth', lastName: 'Harwood', gender: 'female', hide: false},
				{firstName: 'Christie', lastName: 'Zablocki', gender: 'female', hide: false},
				{firstName: 'Rameka', lastName: 'Price', gender: 'female', hide: false},
				{firstName: 'Brittney', lastName: 'Williams', gender: 'female', hide: false}
			].sort(function() { return 0.5 - Math.random(); }); // Randomize
		};

		return {
			getTeam: getTeam
		};
	});