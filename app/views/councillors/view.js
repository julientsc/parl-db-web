'use strict';

angular.module('myApp.view.councillors', ['ngRoute', 'myApp.filter', 'myApp.services', 'myApp.view.filter'])
/*
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/default/template.html',
            controller: 'MainController',
            reloadOnSearch: false
        })

    }])
*/
    .directive('councillorsList', function() {
        return {
            restrict: 'E',
            scope: {
                filter: '=selection',
                updateCouncillor: '=action'
            },
            templateUrl: 'views/councillors/template.html',
            controller: 'CouncillorsController'
        };
    })

    .directive('councillorDisplay', function() {
        return {
            restrict: 'E',
            scope: {
                councillor: '=councillor',
            },
            template: '<div style="margin: 3px"><div ng-if="councillor != null" class="text-center">' +
                        '<img class="img-thumbnail" ng-src="http://www.parlament.ch/SiteCollectionImages/profil/gross/{{councillor.number}}.jpg" alt="{{councillor.firstname}} {{councillor.lastname}}" />' +
                        '</div><div class="text-center" style="font-size:10px">{{councillor.firstname}} {{councillor.lastname}} {{councillor.id}}</div></div>'
        };
    })

    .controller('CouncillorsController', ['$scope', 'QueriesService', '$location', '$interval', function ($scope, QueriesService, $location, $interval) {

        $scope.title = "My Title";


        $scope.councillors = [];

        $scope.filtredCouncillors = [];
        $scope.filtredCouncillors4 = [];

        $scope.updateCouncillors = function (data) {
            console.log("updateCouncillors");
            $scope.councillors = data;
        };
        QueriesService.getCouncillors($scope.updateCouncillors);

        $scope.updateCouncillor = function() {
            console.log("update");
            $scope.filtredCouncillors = [];
            $scope.filtredCouncillors4 = [];

            var selectedCantons = [];
            _.each( $scope.filter.canton, function( val, key ) {
                if ( val.isSelected ) {
                    selectedCantons.push(key);
                }
            });

            var selectedParties = [];
            _.each( $scope.filter.party, function( val, key ) {
                if ( val.isSelected ) {
                    selectedParties.push(key);
                }
            });

            var selectedLangugage = [];
            _.each( $scope.filter.lang, function( val, key ) {
                if ( val.isSelected ) {
                    selectedLangugage.push(key);
                }
            });

            var selectedFaction= [];
            _.each( $scope.filter.faction, function( val, key ) {
                if ( val.isSelected ) {
                    selectedFaction.push(key);
                }
            });

            var selectedCouncil= [];
            _.each( $scope.filter.council, function( val, key ) {
                if ( val.isSelected ) {
                    if(key == 1)
                        selectedCouncil.push("N");
                    else
                        selectedCouncil.push("S");
                }
            });

            var line = [];

            for (var councillorId in $scope.councillors) {
                var mustAdd = true;
                var councillor = $scope.councillors[councillorId];

                var cantons = _.union([], [councillor.canton]);
                var langs = _.union([], [councillor.lang]);

                var parties = [];
                var factions = [];
                var councils = [];

                for (var groupId in councillor.group) {
                    var group = councillor.group[groupId];
                    var groupName = group.substring(0, group.indexOf("/"));
                    var groupId = group.substring(group.indexOf("/") + 1);

                    switch (groupName) {
                        case "party":
                            parties = _.union(parties, [groupId]);
                            break;
                        case "faction":
                            factions = _.union(factions, [groupId]);
                            break;
                        case "council":
                            councils = _.union(councils, [groupId]);
                            break;
                    }
                }

                if(_.size(selectedCantons) != 0) {
                    if(_.size(_.intersection(cantons, selectedCantons)) == 0)
                        mustAdd = false;

                }

                if(_.size(selectedParties) != 0) {
                    if(_.size(_.intersection(parties, selectedParties)) == 0)
                        mustAdd = false;
                }

                if(_.size(selectedLangugage) != 0) {
                    if(_.size(_.intersection(langs, selectedLangugage)) == 0)
                        mustAdd = false;
                }

                if(_.size(selectedFaction) != 0) {
                    if(_.size(_.intersection(factions, selectedFaction)) == 0)
                        mustAdd = false;
                }

                if(_.size(selectedCouncil) != 0) {

                    if(_.size(_.intersection(councils, selectedCouncil)) == 0)
                        mustAdd = false;

                }



                if(mustAdd) {
                    $scope.filtredCouncillors.push(councillor);

                    line.push(councillor);
                    if(_.size(line) == 4) {
                        $scope.filtredCouncillors4.push(line);
                        line = [];
                    }
                }
            }

            if(_.size(line) >0 )
                $scope.filtredCouncillors4.push(line);

        }

    }]);

