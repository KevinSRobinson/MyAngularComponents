var myDisplayField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-6'>",
                         "<span class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></span>",
                    "</div>",
                    "<div class='col-sm-6'>",
                         "{{$ctrl.ngModel}}",
                    "</div>",
                 "</div>"].join("")
};

var app = angular.module('myComponents').component("myDisplayField", myDisplayField);