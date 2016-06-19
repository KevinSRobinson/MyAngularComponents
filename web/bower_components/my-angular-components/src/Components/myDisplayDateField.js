var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@',
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-2'>",
                         "<span class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></span>",
                    "</div>",
                    "<div class='col-sm-8'>",
                         "{{ctrl.ngModel}}",
                    "</div>",
                 "</div>"].join("")
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);