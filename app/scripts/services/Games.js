/*global _:false */
'use strict';

angular.module('kickballApp.services')

	.factory('Games', function() {
		
		var getGames = function() {
			return [
				{id: 1, date: 'Sun Mar 23 2014 13:00:00 GMT-0400 (EDT)', opponent: 'DSCA', abbrev: 'DSC', homeScore: 10, awayScore: 0, home: false},
				{id: 2, date: 'Sun Mar 30 2014 13:00:00 GMT-0400 (EDT)', opponent: 'Smack My Pitch Up', abbrev: 'SMP', homeScore: 10, awayScore: 24, home: false},
				{id: 3, date: 'Thu Mar 06 2014 14:00:00 GMT-0500 (EST)', opponent: 'Lemons Kick Asana', abbrev: 'LKA', homeScore: 11, awayScore: 2, home: true},
				{id: 4, date: 'Sun Apr 13 2014 15:00:00 GMT-0400 (EDT)', opponent: 'Big Black Kicks', abbrev: 'BBK', homeScore: 5, awayScore: 5, home: false},
				{id: 5, date: 'Sun Apr 27 2014 13:00:00 GMT-0400 (EDT)', opponent: 'Amaze Balls', abbrev: 'AMZ', homeScore: 0, awayScore: 0, home: null},
				{id: 6, date: 'Sun May 04 2014 14:00:00 GMT-0400 (EDT)', opponent: 'Delivering Divas', abbrev: 'DDS', homeScore: 0, awayScore: 0, home: null},
				{id: 7, date: 'Sun May 11 2014 13:00:00 GMT-0400 (EDT)', opponent: 'Sunday Sparkle', abbrev: 'SPK', homeScore: 0, awayScore: 0, home: null},
				{id: 8, date: 'Sun May 18 2014 13:00:00 GMT-0400 (EDT)', opponent: 'Free Ballerz', abbrev: 'FBZ', homeScore: 0, awayScore: 0, home: null}
			];
		};

		var getSoonestGame = function () {

			var now = new Date(),
				games = getGames(),
				futureGames = [];

			//Set 'now' to 2 hours ago so it doesn't show the next game until this week's game is over
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