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
        $scope.$watch("vm.categories", function () {

            if (vm.items != undefined) {

                
                // loop through all the tags in the list
                angular.forEach(vm.items, function (key, value) {


                    // separate out tags
                    var tags = getCats(key.Category);
                    angular.forEach(tags, function (key, value) {
                        if (vm.cats.indexOf(key) == -1) {

                            vm.cats.push(key);
                        }
                    
                    });
                    
                    
                  
                });
            }
        });



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
        "<option ng-repeat='catgeory in vm.cats' value='{{catgeory}}'>{{catgeory}}</option>",
        "</select>",
        "</div>"].join("")
};

myCategorySelect.$inject = ["$scope"];

angular.module("myComponents").component("myCategorySelect", myCategorySelect);