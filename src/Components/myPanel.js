var myPanel = {
    transclude: true,
    bindings: {
        title: "@",
        fieldName: "@",
        style: "@",
        icon: "@",
        iconSize: "@"
    },
    controllerAs:"vm",
    template: "<div class='panel panel-default {{vm.style}}'>" +
    "<div class='panel-heading' id='{{vm.fieldName}}'><i class='fa fa-{{vm.icon}} fa-{{vm.iconSize}}x'></i>{{vm.title}}</div>" +
    "<div class='panel-body' ng-transclude></div>" +
    "</div>",
};

angular.module("myComponents").component("myPanel", myPanel);