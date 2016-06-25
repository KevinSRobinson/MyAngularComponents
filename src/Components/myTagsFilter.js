/**
 * This component displays a list of clickable tags.
 * It extracts out unique Tag values from the supplied list *
 * @type {{bindings: {ngModel: string}, controllerAs: string, controller: myTagsFilterList.controller, templateUrl: string}}
 */
var myTagsFilterList = {
    bindings: {
        tags: "=",
        tagsFieldName : "@",
        selected: "="
    },
    controllerAs: "vm",
    controller: function ($scope) {
        "use strict";

        var vm = this;

        //use the default field for tags if none is specified
        if(vm.tagsFieldName == undefined){
            vm.tagsFieldName = "Tags";
        }


        vm.tagList = [];

        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getTags = function (tags) {

            if(isJson(tags))
            {
                return  angular.fromJson(tags);
            }
            else {
                return tags.split(",");
            }

        };
        // watch for changes
        $scope.$watch("vm.tags", function () {


            if(vm.tags != undefined){

                // loop through all the tags in the list
                angular.forEach(vm.tags, function (key, value) {

                    if(key[vm.tagsFieldName] != undefined){

                        // separate out tags
                        var tags =getTags(key.Tags);

                        // add the tags to the tagList if not already
                        angular.forEach(tags, function (key, value) {
                            if (vm.tagList.indexOf(key) == -1) {
                                vm.tagList.push(key);
                            }
                        });
                    }
                });
            }
        });

        vm.tagClicked = function (tag) {
            vm.selected = tag;
        };


    },
    templateUrl: "/app/Core/Components/MyFilterTagsList/myTagsListTemplate.html"
};


myTagsFilterList.$inject =  ["$scope"];


angular.module("myComponents").component("myTagsFilterList", myTagsFilterList);