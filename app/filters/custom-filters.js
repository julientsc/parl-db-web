angular.module('councillorFilters', ['myApp.filter'])
    .filter('isCouncillorSelected', function () {
        return function (councillors2, selections2) {

            var councillors = angular.copy(councillors2);
            var selections = angular.copy(selections2);

            if (councillors == null || selections == null)
                return [];
            console.log("call councillor filter");

            var councillorsToSave = [];
            for (var councillorId in councillors) {
                var councillor = councillors[councillorId];

                var mustSave = true;


                if (mustSave) {
                    mustSave = false;

                    if (selections.languages == null || selections.languages == '' || selections.languages.length == 0)
                        mustSave = true;
                    else
                        for (var languageId in selections.languages) {
                            var language = selections.languages[languageId];
                            if (councillor.lang == language.id) {
                                mustSave = true;
                                break;
                            }
                        }
                }


                if (mustSave) {
                    mustSave = false;

                    if (selections.cantons == null || selections.cantons.length == 0)
                        mustSave = true;
                    else
                        for (var cantonId in selections.cantons) {
                            var canton = selections.cantons[cantonId];
                            if (councillor.canton == canton.id) {
                                mustSave = true;
                                break;
                            }
                        }
                }

                if (mustSave) {
                    mustSave = false;

                    if (selections.councils == null || selections.councils.length == 0)
                        mustSave = true;
                    else
                        for (var councilId in selections.councils) {
                            var council = selections.councils[councilId];

                            for (var groupId in councillor.group) {
                                var group = councillor.group[groupId];
                                if (group === council.item) {
                                    mustSave = true;
                                    break;
                                }
                            }
                            if (mustSave)
                                break;
                        }
                }

                if (mustSave) {
                    mustSave = false;

                    if (selections.factions == null || selections.factions.length == 0)
                        mustSave = true;
                    else
                        for (var councilId in selections.factions) {
                            var council = selections.factions[councilId];

                            for (var groupId in councillor.group) {
                                var group = councillor.group[groupId];
                                if (group === council.item) {
                                    mustSave = true;
                                    break;
                                }
                            }
                            if (mustSave)
                                break;
                        }
                }

                if (mustSave) {
                    mustSave = false;

                    if (selections.parties == null || selections.parties.length == 0)
                        mustSave = true;
                    else
                        for (var councilId in selections.parties) {
                            var council = selections.parties[councilId];

                            for (var groupId in councillor.group) {
                                var group = councillor.group[groupId];
                                if (group === council.item) {
                                    mustSave = true;
                                    break;
                                }
                            }
                            if (mustSave)
                                break;
                        }
                }


                if (mustSave)
                    councillorsToSave.push(councillor);

            }

            return councillorsToSave;

        };
    })
    .filter('rangePrepare', function () {
        return function (councillors2, rangeCount2) {
            var councillors = angular.copy(councillors2);
            var rangeCount = angular.copy(rangeCount2);

            if (councillors == null)
                return [];


            console.log("call range prepare");

            var table = [];
            var line;

            var i = 0;
            for (var councillorId in councillors) {

                if (i == 0) {
                    line = [];
                }

                var councillor = councillors[councillorId];
                line.push(councillor);

                i++;

                if (i == rangeCount) {
                    table.push(line);
                    i = 0;
                }

            }
            return table;
        };
    });