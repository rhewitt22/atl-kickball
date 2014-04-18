/*global _:false */
'use strict';

angular.module('kickballApp.services')

	.factory('Games', function() {
		
		var getGames = function() {
			return [
				{id: 1, date: new Date(2014, 2, 16, 13)},
				{id: 2, date: new Date(2014, 2, 23, 13)},
				{id: 3, date: new Date(2014, 2, 30, 14)},
				{id: 4, date: new Date(2014, 3, 6, 13)},
				{id: 5, date: new Date(2014, 3, 13, 14)},
				{id: 6, date: new Date(2014, 3, 27, 13)},
				{id: 7, date: new Date(2014, 4, 4, 14)}
			];
		};

		var getSoonestGame = function () {

			var now = new Date(),
				games = getGames(),
				futureGames = [];

			//Set "now" to 2 hours ago so it doesn't show the next game until we're done
			now.setHours(now.getHours() - 2);
			
			_.each(games, function(game) {

				if (game.date > now) {
					futureGames.push(game);
				}
			});
			return futureGames[0];
		};

		return {
			getGames: getGames,
			getSoonestGame: getSoonestGame
		};
	});