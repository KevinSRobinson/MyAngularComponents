var myPopover = {
    bindings: {
        ngModel: "<"
    },
    controllerAs: "vm",
    template: ["<span class='glyphicon glyphicon glyphicon-question-sign' ",
        " style='font-size: large;color: blue;' ",
        " uib-popover='{{vm.ngModel}}'",
        "  popover-trigger='mouseenter' ",
        " popover-placement='right'",
        " aria-hidden='true'>"].join("")
};


angular.module("myComponents").component("myPopover", myPopover);
