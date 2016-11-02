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
    controller: function($log) {
        "use strict";
        var vm = this;


        vm.fieldLabel = "Set this Text using field-label='sample label'"
        

        this.$onInit = function() {
          
            
           //'initializeDate();

            // if the field name is not specified set the field name to the label text 
            if (vm.fieldName == null) {
                vm.fieldName = vm.fieldLabel.replace(" ", "");
            }

            // if the tooltip text is specified show the tooltip
            if (vm.toolTip) {
                vm.showToolTip = true;
            }

            // start with the date popup closed
            vm.popup1 = {
                opened: false
            };

        };





        var initializeDate = function() {
            console.log("initializeDate");
             console.log(vm.ngModel);
            
            if (!vm.ngModel == undefined) {
                 
                  
                //if the date is not a date object - convert
                if (typeof vm.ngModel != 'date') {
                    vm.ngModel = new Date(vm.ngModel);
                }
            }
            else
            {
                vm.ngModel = new Date();
                $log.warn("Set the Date useing ngModel=''");
            }
        }







        // open the date popup
        vm.open = function() {
            vm.popup1.opened = true;
        };



    },
    templateUrl: "myDateField.html"
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);
