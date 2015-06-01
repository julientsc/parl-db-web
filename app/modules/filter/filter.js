'use strict';

angular.module('myApp.filter', ['ngRoute', 'myApp.services', 'ui.multiselect'])

    .controller('filterCtrl', ['$scope', 'QueriesService', '$location', 'FilterUpdateService', function ($scope, QueriesService, $location, FilterUpdateService) {

        $scope.selection = {};

        $scope.selection.cantons = [];
        $scope.selection.councils = [];
        $scope.selection.factions = [];
        $scope.selection.languages = [];
        $scope.selection.parties = [];

        $scope.loadCount = 0;

        $scope.filters = {};


       // QueriesService.getCouncillors($scope.updateCouncillors);



        $scope.updateCantons = function (data) {
            $scope.filters.cantons = data;
        };

        $scope.updateCouncils = function (data) {
            $scope.filters.councils = data;
        };

        $scope.updateFactions = function (data) {
            $scope.filters.factions = data;
        };

        $scope.updateLanguages = function (data) {
             $scope.filters.languages = data;
         };

        $scope.updateParties = function (data) {
            $scope.filters.parties = data;
         };

        $scope.setChecked = function(name, data) {
            name =(name);
            data =(data);
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

            console.log("Filter change");
            FilterUpdateService.update($scope.selection);

        };


    }])
    .directive('filter', function() {
        return {
            restrict: 'E',
            scope: {
                selection: '=data'
            },
            templateUrl: 'modules/filter/filter.html',
            controller: 'filterCtrl'
        };
    });

