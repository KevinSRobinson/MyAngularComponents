var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs:"vm",
    template: ["<div class='row'>",
                    "<div class='col-sm-2'>",
                         "<span class='control-label'><strong>{{vm.fieldLabel}}</strong></span>",
                    "</div>",
                    "<div class='col-sm-8'>",
                         "{{vm.ngModel | date:'medium' }}",
                    "</div>",
                 "</div>"].join("")
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);