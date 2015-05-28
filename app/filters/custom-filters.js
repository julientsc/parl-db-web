angular.module('councillorFilters', ['myApp.view1']).filter('isCouncillorSelected', function () {
    return function (councillors, selections) {
        //console.log(selections);
        // console.log(councillors);

        var councillorsToSave = [];
        for (var councillorId in councillors) {
            var councillor = councillors[councillorId];

            var mustSave = true;


            if(mustSave) {
                mustSave = false;

                if(selections.languages.length == 0)
                    mustSave = true;
                else
                for(var languageId in selections.languages) {
                    var language = selections.languages[languageId];
                    if(councillor.lang == language.id) {
                        mustSave = true;
                        break;
                    }
                }
            }


            if(mustSave) {
                mustSave = false;

                if(selections.cantons.length == 0)
                    mustSave = true;
                else
                for(var cantonId in selections.cantons) {
                    var canton = selections.cantons[cantonId];
                    if(councillor.canton == canton.id) {
                        mustSave = true;
                        break;
                    }
                }
            }

            if(mustSave) {
                mustSave = false;

                if(selections.councils.length == 0)
                    mustSave = true;
                else
                for(var councilId in selections.councils) {
                    var council = selections.councils[councilId];

                    for(var groupId in councillor.group) {
                        var group = councillor.group[groupId];
                        if(group === council.item) {
                            mustSave = true;
                            break;
                        }
                    }
                    if(mustSave)
                        break;
                }
            }

            if(mustSave) {
                mustSave = false;

                if(selections.factions.length == 0)
                    mustSave = true;
                else
                for(var councilId in selections.factions) {
                    var council = selections.factions[councilId];

                    for(var groupId in councillor.group) {
                        var group = councillor.group[groupId];
                        if(group === council.item) {
                            mustSave = true;
                            break;
                        }
                    }
                    if(mustSave)
                        break;
                }
            }

            if(mustSave) {
                mustSave = false;

                if(selections.parties.length == 0)
                    mustSave = true;
                else
                for(var councilId in selections.parties) {
                    var council = selections.parties[councilId];

                    for(var groupId in councillor.group) {
                        var group = councillor.group[groupId];
                        if(group === council.item) {
                            mustSave = true;
                            break;
                        }
                    }
                    if(mustSave)
                        break;
                }
            }



            if(mustSave)
                councillorsToSave.push(councillor);

        }

        return councillorsToSave;

    };
});