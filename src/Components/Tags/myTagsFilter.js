/**
 * This component displays a list of clickable tags.
 * It extracts out unique Tag values from the supplied list *
 * @type {{bindings: {ngModel: string}, controllerAs: string, controller: myTagsFilterList.controller, templateUrl: string}}
 */
var myTagsFilterList = {
    bindings: {
        items: "=",
        tagsFieldName: "@",
        selected: "="
    },
    controllerAs: "vm",
    controller: function ($scope) {
        "use strict";

        var vm = this;
        vm.selected = {};
        

        //use the default field for tags if none is specified
        if (vm.tagsFieldName == undefined) {
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

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(",");
            }

        };


        // watch for changes
        $scope.$watch("vm.tags", function () {


            if (vm.items != undefined) {

                // loop through all the tags in the list
                angular.forEach(vm.items, function (key, value) {

                    if (key[vm.tagsFieldName] != undefined) {

                        // separate out tags
                        var tags = getTags(key.Tags);

                        // add the tags to the tagList if not already
                        angular.forEach(tags, function (key, value) {
                            if (vm.tagList.indexOf(key) == -1) {
                                vm.tagList.push(key.replace(" ", ""));
                            }
                        });
                    }
                });
            }
        });

        vm.tagClicked = function (tag) {
            console.log('tagClicked');
            console.log(tag);
            vm.selected = tag;
        };


    },
    template: ["<div class='form-group'>",
        "<label class='control-label' style='min-width: 110px; text-align: left'>Tags</label>",
        "<div class='form-control'>",
        "<span ng-repeat='tag in vm.tagList'>",
        "<span class='badge' ng-click='vm.tagClicked(tag)' >{{tag}}</span>",
        "</span>",
        "</div>",
        "</div>"].join("")
};


myTagsFilterList.$inject = ["$scope"];


angular.module("myComponents").component("myTagsFilterList", myTagsFilterList);