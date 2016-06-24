'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/_index.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: 'templates/_about.html',
    controller: 'AboutController'
  })
  .when('/contact', {
    templateUrl: 'templates/_contact.html',
    controller: 'ContactController'
  })
  .otherwise({redirectTo: '/'});
});
