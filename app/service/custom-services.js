angular.module('myApp.services', [])

    .service('QueriesService', function ($http) {
        this.url = "http://localhost:8080/rest";

        this.getCantons = function(d) {
            //console.log("/parl/canton");
            $http.get(this.url + '/parl/canton').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    d(null);
                });
        }

        this.getCouncils = function(d) {
            //console.log("/parl/council");
            $http.get(this.url + '/parl/council').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    d(null);
                });
        }
        this.getFactions = function(d) {
            //console.log("/parl/faction");
            $http.get(this.url + '/parl/faction').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    d(null);
                });
        }


        this.getLanguages = function(d) {
            //console.log("/parl/language");
            $http.get(this.url + '/parl/language').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    d(null);
                });
        }


        this.getParties = function(d) {
            //console.log("/parl/party");
            $http.get(this.url + '/parl/party').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    d(null);
                });
        }



    });