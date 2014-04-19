'use strict';

angular.module('kickballApp.services')

	.factory('Team', function() {
		
		var getTeam = function() {
			return [
				{firstName: 'Roy', lastName: 'Hewitt', gender: 'Male', hide: false},
				{firstName: 'Alessandro', lastName: 'Salvo', gender: 'Male', hide: false},
				{firstName: 'Alfonso', lastName: 'Savage', gender: 'Male', phone: null, hide: false},
				{firstName: 'Brandon', lastName: 'Holtzclaw', gender: 'Male', hide: false},
				{firstName: 'Jody', lastName: 'Wingo', gender: 'Male', hide: false},
				{firstName: 'Malone', lastName: 'Allen', gender: 'Male', hide: false},
				{firstName: 'Matt', lastName: 'Woodruff', gender: 'Male', hide: false},
				{firstName: 'Chris', lastName: 'Cravey', gender: 'Male', hide: false},
				{firstName: 'Nick', lastName: 'Holtzclaw', gender: 'Male', hide: false},
				{firstName: 'Caty', lastName: 'Clements', gender: 'Female', hide: false},
				{firstName: 'Elizabeth', lastName: 'Harwood', gender: 'Female', hide: false},
				{firstName: 'Christie', lastName: 'Zablocki', gender: 'Female', hide: false},
				{firstName: 'Rameka', lastName: 'Price', gender: 'Female', hide: false},
				{firstName: 'Brittney', lastName: 'Williams', gender: 'Female', hide: false}
			].sort(function() { return 0.5 - Math.random(); }); // Semi-randomize
		};

		return {
			getTeam: getTeam
		};
	});