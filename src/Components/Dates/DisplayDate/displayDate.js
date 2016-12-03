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
        if(typeof vm.ngModel !== 'date'){
            vm.ngModel = new Date(vm.ngModel);
        }
        
    },
    templateUrl: "displayDate.html"
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);