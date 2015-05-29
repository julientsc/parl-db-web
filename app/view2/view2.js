'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.templates'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            reloadOnSearch: false
        });
    }])

    .controller('View2Ctrl', ['$scope', 'QueriesService', function ($scope, QueriesService) {


        $scope.councillors = [];



    }]);