var myPanel = {
    restrict: "E",
    transclude: true,
    bindings: {
        title: "@title",
        fieldname: "@fieldname",
        style: "@"
    },
    template: "<div class='panel panel-default {{style}}'>" +
    "<div class='panel-heading' id='{{fieldname}}'>{{title}}</div>" +
    "<div class='panel-body' ng-transclude></div>" +
    "</div>",
    replace: true
};


angular.module("myComponents").component("myPanel", myPanel);