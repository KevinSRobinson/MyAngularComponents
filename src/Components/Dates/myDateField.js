/**
 * Date field component with Field Label, Date Popup, Help Popup
 * @type {{bindings: {ngModel: string, fieldName: string, fieldLabel: string, toolTip: string, showToolTip: string}, controllerAs: string, controller: myDateField.controller, template: string}}
 */
var myDateField = {
    bindings: {
        ngModel: "=",
        fieldName: "@",
        fieldLabel: "@",
        toolTip: "@",
        showToolTip: "@"
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";
        var vm = this;

        
        vm.init = function () {
            
            // if the field name is not specified set the field name to the label text 
            if (vm.fieldName == null) {
                vm.fieldName = vm.fieldLabel.replace(" ", "");
            }

            // if the tooltip text is specified show the tooltip
            if(vm.toolTip)
            {
                vm.showToolTip = true;
            }

            // start with the date popup closed
            vm.popup1 = { opened: false };
        };
        
       
        // open the date popup
        vm.open = function () {
            vm.popup1.opened = true;
        };

        
        vm.init();
        
    },
    template: [
        "<div class='form-group'>",
        "<label class='control-label' style='min-width: 110px; text-align: left'>{{vm.fieldLabel}}</label>",
        "<div class='input-group'>",
        "<input type='text' class='form-control' id='{{vm.fieldName}}'",
        " uib-datepicker-popup='dd-MMMM-yyyy' ng-model='vm.ngModel'  is-open='vm.popup1.opened'/> ",
        "<span class='input-group-btn'>",
        "<button type='button' class='btn btn-default' ng-click='vm.open()'>" +
        "<i class='fa fa-calendar'></i></button>",
        " </span>",
        "   <div class='input-group-addon' style='line-height: 0 !important;'  ng-show='vm.showToolTip'><my-popover ng-model='vm.toolTip'></my-popover></div>",
        "</div>"].join(""),
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);

