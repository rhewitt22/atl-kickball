'use strict';

angular.module('kickballApp', [
  'kickballApp.services',
  'kickballApp.controllers',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'attendance/attendance.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
