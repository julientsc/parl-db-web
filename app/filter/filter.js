'use strict';

angular.module('myApp.filter', ['ngRoute', 'myApp.services', 'ui.multiselect', 'councillorFilters'])
/*
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/filter:name?', {
            templateUrl: 'filter/filter.html',
            controller: 'filtlerCtrl',
            reloadOnSearch: false
        });
    }])
*/


    .controller('filterCtrl', ['$scope', 'QueriesService', '$location', function ($scope, QueriesService, $location) {

        $scope.selection = {};

        $scope.selection.cantons = [];
        $scope.selection.councils = [];
        $scope.selection.factions = [];
        $scope.selection.languages = [];
        $scope.selection.parties = [];

        $scope.loadCount = 0;

        $scope.filters = {};

        $scope.councillors = [];

        $scope.updateCouncillors = function (data) {
            $scope.councillors = angular.copy(data);
        };

        QueriesService.getCouncillors($scope.updateCouncillors);



        $scope.updateCantons = function (data) {
            data = angular.copy(data);
            $scope.filters.cantons = data;
            $scope.setChecked("cantons", data);
            $scope.loadCount++;
        };

        $scope.updateCouncils = function (data) {
            data = angular.copy(data);
            $scope.filters.councils = data;
            $scope.setChecked("councils", data);
            $scope.loadCount++;
        };

        $scope.updateFactions = function (data) {
            data = angular.copy(data);
            $scope.filters.factions = data;
            $scope.setChecked("factions", data);
            $scope.loadCount++;
        };

        $scope.updateLanguages = function (data) {
            data = angular.copy(data);
            $scope.filters.languages = data;
            $scope.setChecked("languages", data);
            $scope.loadCount++;
        };

        $scope.updateParties = function (data) {
            data = angular.copy(data);
            $scope.filters.parties = data;
            $scope.setChecked("parties", data);
            $scope.loadCount++;
        };

        $scope.setChecked = function(name, data) {
            name = angular.copy(name);
            data = angular.copy(data);
            var v = $location.search()[name];
            var va = [];
            if (Object.prototype.toString.call(v) === '[object Array]') {
                for (var id in $location.search()[name]) {
                    va.push($location.search()[name][id]);
                }
            } else {
                va.push($location.search()[name]);
            }
            for (var id in va) {
                for (var d in data) {
                    if (data[d].id == va[id]) {
                        $scope.selection[name].push(data[d]);
                    }
                }
            }
        };


        QueriesService.getCantons($scope.updateCantons);
        QueriesService.getCouncils($scope.updateCouncils);
        QueriesService.getFactions($scope.updateFactions);
        QueriesService.getLanguages($scope.updateLanguages);
        QueriesService.getParties($scope.updateParties);


        $scope.changeSelection = function () {
            // don't run change before the global loading
            if ($scope.loadCount != 5)
                return;

            // init the location
            var loc = {};
            for (var id in $scope.selection) {
                if ($scope.selection[id] != null) {
                    for (var elt in $scope.selection[id]) {
                        if (loc[id] == null) {
                            loc[id] = [];
                        }
                        loc[id].push($scope.selection[id][elt].id)
                    }
                }
            }
            $location.search(loc);

        };


    }])
    .directive('filter', function() {
        return {
            restrict: 'E',
            scope: {
                councillors: '=councillors'
            },
            templateUrl: 'filter/filter.html',
            controller: 'filterCtrl'
        };
    });

