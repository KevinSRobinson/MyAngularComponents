var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@',
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-2'>",
                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
                    "</div>",
                    "<div class='col-sm-8'>",
                         "{{ctrl.ngModel}}",
                    "</div>",
                 "</div>"].join("")
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);