var myModalHeader = {
    bindings: {
        title: "@"
    },
    templateUrl: "modalHeaderTemplate.html"
};


var app = angular.module("myComponents").component("myModalHeader", myModalHeader);
