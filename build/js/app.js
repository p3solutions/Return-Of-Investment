angular.module('input', ['ngRoute','firebase','returnOfInvestment.services','returnOfInvestment.directives','returnOfInvestment.controllers'])
.config(function($routeProvider) {
  $routeProvider
    .when('/input', {
      controller:'InputController',
      templateUrl:'input.html'
    })
    .when('/summary', {
      controller:'SummaryController',
      templateUrl:'summary.html'
    })
    .otherwise({
      redirectTo:'/input'
    });
})