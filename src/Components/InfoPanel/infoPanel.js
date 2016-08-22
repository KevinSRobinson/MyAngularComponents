var myInfoPanel = {
    bindings: {
        info: "@",
        icon: "@",
        color: "@"
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";
        var vm = this;

        vm.init = function () {


            if (vm.icon == undefined) {
                vm.icon = "fa fa-info fa-2x";
            }

            if (vm.color == undefined) {
                vm.color = "#64518A";
            }
        };


        vm.getStyle = function () {
            return " border-left: 5px solid #64518A;" +
                " border-radius: 0 15px 15px 0; !important; " +
                " padding: 1rem 1rem;   !important; " +
                " background: " + vm.color + " !important;" +
                " font-size: 1.65rem; !important; margin: 0;  !important; " +
                " color: " + vm.color + " !important;"
        };

        console.log(vm.getStyle());
        vm.init();
        //

    },
    template: ["<div class='myInfoPanel'" +
    " style='{{vm.getStyle()}}'>",
        " <i class='fa fa-{{vm.icon}} fa-2x' style='margin: 4px;  color: #64518A' ></i>" +
        "{{vm.info}}",
        "<ul class='on-page-nav'></ul></div>"].join("")
};


angular.module("myComponents").component("myInfoPanel", myInfoPanel);