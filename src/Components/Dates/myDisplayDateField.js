var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs:"vm",
    controller: function () {
        "use strict";
        
        
        var vm = this;
        
        //if the date is not a date object - convert
        if(typeof vm.ngModel != 'date'){
            vm.ngModel = new Date(vm.ngModel);
        }
        
    },
    template: ["<div class='row'>",
                    "<div class='col-md-4'>",
                         "<span class='control-label'><strong>{{vm.fieldLabel}}</strong></span>",
                    "</div>",
                    "<div class='col-md-8'>",
                         "{{vm.ngModel | date:'medium' }}",
                    "</div>",
                 "</div>"].join("")
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);