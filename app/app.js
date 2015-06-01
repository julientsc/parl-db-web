'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.filter',
    'myApp.view.default',
    'myApp.version',
    'myApp.templates',
    'myApp.view.filter',
    'myApp.view.councillors',
    'myApp.view.councillorsByAge',


    'myApp.view.social.default',
    'myApp.view.social.frequenceActivity',
    'myApp.view.social.generalRanking',
    'myApp.view.social.friendsFollowers',
    'myApp.view.social.otherActors',
    'myApp.view.social.periodActivity',


    'myApp.services',
    'councillorFilters'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
