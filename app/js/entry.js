require('angular/angular');
require('angular-route');
require('angular-base64');
require('leaflet');
require('angular-simple-logger');
require('ui-leaflet');
var angular = window.angular;

var familyTreeApp = angular.module('FamilyTreeApp', ['ngRoute', 'base64', require('angular-cookies'), 'nemLogging', 'ui-leaflet']);
require('./users/users.js')(familyTreeApp);
require('./family_tree/family_tree')(familyTreeApp);
require('./directives/directives')(familyTreeApp);


familyTreeApp.config(['$routeProvider', function($route) {
  $route
  .when('/tree', {
    templateUrl: '/templates/family_tree_view.html',
    controller: 'FamilyTreeController'
  })
  .when('/signup', {
    templateUrl: '/templates/users/views/signupin_view.html',
    controller: 'SignupController'
  })
  .when('/signin', {
    templateUrl: '/templates/users/views/signupin_view.html',
    controller: 'SigninController'
  })
  .when('/about', {
    templateUrl: '/templates/about-us-template.html'
  })
  .otherwise({redirectTo: '/signup'});
}]);
