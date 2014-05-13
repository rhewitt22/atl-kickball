/*global _:false */
'use strict';

angular.module('kickballApp.services')

	.factory('Games', function() {
		
		var getGames = function() {
			return [
				{id: 1, date: new Date(2014, 2, 23, 13), opponent: 'DSCA', abbrev: 'DSC', homeScore: 10, awayScore: 0, home: false},
				{id: 2, date: new Date(2014, 2, 30, 13), opponent: 'Smack My Pitch Up', abbrev: 'SMP', homeScore: 10, awayScore: 24, home: false},
				{id: 3, date: new Date(2014, 2, 6, 14), opponent: 'Lemons Kick Asana', abbrev: 'LKA', homeScore: 11, awayScore: 2, home: true},
				{id: 4, date: new Date(2014, 3, 13, 15), opponent: 'Big Black Kicks', abbrev: 'BBK', homeScore: 5, awayScore: 5, home: false},
				{id: 5, date: new Date(2014, 3, 27, 13), opponent: 'Amaze Balls', abbrev: 'AMZ', homeScore: 0, awayScore: 0, home: null},
				{id: 6, date: new Date(2014, 4, 4, 14), opponent: 'Delivering Divas', abbrev: 'DDS', homeScore: 0, awayScore: 0, home: null},
				{id: 7, date: new Date(2014, 4, 11, 13), opponent: 'Sunday Sparkle', abbrev: 'SPK', homeScore: 0, awayScore: 0, home: null}
			];
		};

		var getSoonestGame = function () {

			var now = new Date(),
				games = getGames(),
				futureGames = [];

			//Set "now" to 2 hours ago so it doesn't show the next game until this week's game is over
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