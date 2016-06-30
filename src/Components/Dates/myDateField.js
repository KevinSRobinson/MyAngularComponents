var myDateField = {

    bindings: {
        ngModel: "=",
        fieldName: "@",
        fieldLabel: "@"
    },
    controllerAs: "vm",
    template: [
        "<div class='form-group'>",
        "<label class='control-label' style='min-width: 110px; text-align: left'>{{vm.fieldLabel}}</label>",
        "<div class='input-group'>",
        "<input type='text' class='form-control'",
        " uib-datepicker-popup='dd-MMMM-yyyy' ng-model='vm.ngModel'  is-open='vm.popup1.opened'/> ",
        "<span class='input-group-btn'>",
        "<button type='button' class='btn btn-default' ng-click='vm.open()'>" +
        "<i class='fa fa-calendar'></i></button>",
        " </span>",
        "</div>"].join(""),
    controller: function () {
        "use strict";
        var vm = this;

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            minDate: new Date()
        };

        vm.popup1 = {
            opened: false
        };

        vm.open = function () {
            vm.popup1.opened = true;
        };

    }
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);

