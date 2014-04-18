'use strict';

angular.module('kickballApp.services')

	.factory('Team', function() {
		
		// Returns semi-randomized array of kickballplayers
		var getTeam = function() {
			return [
				{firstName: 'Roy', lastName: 'Hewitt', gender: 'Male', phone: '(443) 995-9687', hide: false},
				{firstName: 'Alessandro', lastName: 'Salvo', gender: 'Male', phone: '(678) 283-5518', hide: false},
				{firstName: 'Alfonso', lastName: 'Savage', gender: 'Male', phone: null, hide: false},
				{firstName: 'Brandon', lastName: 'Holtzclaw', gender: 'Male', phone: '(770) 329-7791', hide: false},
				{firstName: 'Jody', lastName: 'Wingo', gender: 'Male', phone: '(864) 542-4529', hide: false},
				{firstName: 'Malone', lastName: 'Allen', gender: 'Male', phone: '(512) 964-8515', hide: false},
				{firstName: 'Matt', lastName: 'Woodruff', gender: 'Male', phone: '(706) 247-1138', hide: false},
				{firstName: 'Chris', lastName: 'Cravey', gender: 'Male', phone: '(404) 955-9877', hide: false},
				{firstName: 'Nick', lastName: 'Holtzclaw', gender: 'Male', phone: '(478) 714-2366', hide: false},
				{firstName: 'Caty', lastName: 'Clements', gender: 'Female', phone: '(678) 313-6957', hide: false},
				{firstName: 'Elizabeth', lastName: 'Harwood', gender: 'Female', phone: '(251) 487-2404', hide: false},
				{firstName: 'Christie', lastName: 'Zablocki', gender: 'Female', phone: '(678) 492-6464', hide: false},
				{firstName: 'Rameka', lastName: 'Price', gender: 'Female', phone: '(661) 435-2223', hide: false},
				{firstName: 'Brittney', lastName: 'Williams', gender: 'Female', phone: '(678) 763-6160', hide: false}
			].sort(function() { return 0.5 - Math.random(); });
		};

		return {
			getTeam: getTeam
		};
	});