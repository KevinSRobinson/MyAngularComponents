var myPanel = {
    restrict: "E",
    transclude: true,
    bindings: {
        title: "@",
        fieldName: "@",
        style: "@",
        icon: "@"
    },
    controllerAs:"vm",
    template: "<div class='panel panel-default {{vm.style}}'>" +
    "<div class='panel-heading' id='{{vm.fieldName}}'><i class='fa fa-{{vm.icon}}'></i>{{vm.title}}</div>" +
    "<div class='panel-body' ng-transclude></div>" +
    "</div>",
    replace: true
};

angular.module("myComponents").component("myPanel", myPanel);