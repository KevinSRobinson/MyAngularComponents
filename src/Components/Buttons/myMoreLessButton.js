var myMoreLessButton = {
    bindings: {
        isCollapsed: "="
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";
        var vm = this;
        vm.buttonText = "";

        vm.getButtonText = function () {
            if (vm.isCollapsed) {
                return "More Search Options";
            }
            else {
                return "Fewer Search Options";
            }
        };

        vm.getButtonIcon = function () {

            if (vm.isCollapsed) {
                return "fa fa-arrow-down";
            }
            else {
                return "fa fa-arrow-up";
            }
        };
    },
    template: ["<button type='button' class='btn btn-default pul-right' ",
        " ng-click='vm.isCollapsed = !vm.isCollapsed'> ",
        " <i ng-class='vm.getButtonIcon()' aria-hidden='true'></i>{{ vm.getButtonText() }} ",
        "</button>"].join("")
};

angular.module("myComponents").component("myMoreLessButton", myMoreLessButton);