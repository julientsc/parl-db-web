angular.module('myApp.services', [])

    .service('QueriesService', function ($http) {
        this.url = "http://localhost:8080/rest";

        this.getCantons = function(d) {
            console.log("/parl/canton");
            $http.get(this.url + '/parl/canton').
                success(function(data, status, headers, config) {
                    d(data);
                }).
                error(function(data, status, headers, config) {
                    return null;
                });
        }

        this.getCouncils = function() {
            console.log("/parl/council");
            $http.get(this.url + '/parl/council').
                success(function(data, status, headers, config) {
                    return data;
                }).
                error(function(data, status, headers, config) {
                    return null;
                });
        }
        this.getFactions = function() {
            console.log("/parl/faction");
            $http.get(this.url + '/parl/faction').
                success(function(data, status, headers, config) {
                    return data;
                }).
                error(function(data, status, headers, config) {
                    return null;
                });
        }


        this.getLanguages = function() {
            console.log("/parl/language");
            $http.get(this.url + '/parl/language').
                success(function(data, status, headers, config) {
                    return data;
                }).
                error(function(data, status, headers, config) {
                    return null;
                });
        }


        this.getParties = function() {
            console.log("/parl/party");
            $http.get(this.url + '/parl/party').
                success(function(data, status, headers, config) {
                    return data;
                }).
                error(function(data, status, headers, config) {
                    return null;
                });
        }



    });