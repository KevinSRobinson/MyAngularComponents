var myCategorySelect = {
    bindings: {
        selected: "=",
        items: "="
    },
    controllerAs: "vm",
    controller: function ($scope) {
        "use strict";
        var vm = this;
        vm.cats = [];


        
        // watch for changes
        $scope.$watch("vm.items", function () {

            if (vm.items != undefined) {
                buildList();
            }
        });


        var buildList = function () {

            //add an All option
           // vm.cats.push("All");

            // loop through all the tags in the list
            angular.forEach(vm.items, function (key, value) {

                // separate out tags
                var tags = getCats(key.Category);

                //add the tags to the list
                angular.forEach(tags, function (key, value) {
                    if (vm.cats.indexOf(key) == -1) {
                        vm.cats.push(key);
                    }
                });

            });


            vm.cats = vm.cats.sort();

        };


        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getCats = function (tags) {

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(",");
            }

        };
        
    },
    template: ["<div class='form-group'>", 
        "<label class='control-label' style='min-width: 110px; text-align: left' >Category</label>",
        "<select ng-model='vm.selected' ng-change='vm.categoprySelected(catgeory)' class='form-control'>",
        "<option ng-repeat='catgeory in vm.cats track by $index' value='{{catgeory}}'>{{catgeory}}</option>",
        "</select>",
        "</div>"].join("")
};

myCategorySelect.$inject = ["$scope"];

angular.module("myComponents").component("myCategorySelect", myCategorySelect);