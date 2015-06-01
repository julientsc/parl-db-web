'use strict';

angular.module('myApp.piechart', [])


    .controller('chartCtrl', ['$scope', function ($scope) {

        $scope.title = "Default Graph Title";
        $scope.data = [["a", 10], ["b", 20], ["c", 30], ["d", 40], ["e", 50]];


        $scope.chart = null;

        $scope.draw = function () {
            var content = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    renderTo: 'container'
                },
                title: {
                    text: $scope.title
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: $scope.data
                }]
            }

            $scope.chart = new Highcharts.Chart(content);


        }

        $scope.draw();


    }])
    .directive('pieChartTest', function () {
        return {
            restrict: 'E',
            scope: {
                title: '=',
                data: '='
            },
            templateUrl: 'template.html',
            controller: function ($scope) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            }
        };
    });

