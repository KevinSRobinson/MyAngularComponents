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

           //create a temporary list for building the list
            var catsList = [];
            
            
            // loop through all the tags in the list
            angular.forEach(vm.items, function (key, value) {

                // separate out tags
                var tags = getCats(key.Category);

                //add unique values to the temporary list
                angular.forEach(tags, function (key, value) {
                    if (catsList.indexOf(key.trim()) == -1) {
                        catsList.push(key.trim())
                    }
                });

            });
    
            // copy sorted list to the main category list
            vm.cats = catsList.sort();

            //add an All option to the first item in the list
            vm.cats.unshift("All");

            // set the default option to All
            vm.selected = "All";
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
        "<option ng-repeat='catgeory in vm.cats'   value='{{catgeory}}' >{{catgeory}}</option>",
        "</select>",
        "</div>"].join("")
};

myCategorySelect.$inject = ["$scope"];

angular.module("myComponents").component("myCategorySelect", myCategorySelect);