var modalHeader = {
    bindings: {
        title: "@"
    },
    template: ["<div class='modal-header'>",
        "<h3 class='modal-title'>{{$ctrl.title}}</h3>",
        "</div>"].join("")
};


var app = angular.module("myComponents").component("modalHeader", modalHeader);
