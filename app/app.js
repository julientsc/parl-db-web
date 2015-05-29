'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.filter',
    'myApp.view2',
    'myApp.version',
    'myApp.templates',
    'myApp.services',
    'councillorFilters'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view2', reloadOnSearch: false});
    }]);
