var myPanel = {
    transclude: true,
    bindings: {
        title: "@",
        fieldName: "@",
        style: "@",
        icon: "@",
        iconSize: "@",
        smallHeading: "@",
        add:"&",
        edit:"&"
    },
    controllerAs:"vm",
    controller: function () {
      "use strict";

        var vm = this;
        vm.showEditButton = false;
        vm.showAddButton = false;
        
      
        vm.init  = function () {
                
        };
        
        vm.setDefaults = function () {
            if(vm.add != undefined){
                vm.showAddButton = true;
            }

            if(vm.edit != undefined){
                vm.showEditButton = true;
            }
        };
        
        vm.getPanelStyle = function () {
            if(vm.smallHeading != undefined){
                return  "padding: 3px 5px !important; ";
            }
            return  "padding: 10px 15px";
        };
        
        vm.getButtonStyle = function () {
            if(vm.smallHeading != undefined){
                return  "margin-left: 5px; padding: 3px;";
            }
            return  "margin-left: 5px; padding: 10px;";
        };
        
    },
    template: "<div class='panel panel-{{vm.style}}'>" +
    "<div class='panel-heading' style='{{vm.getPanelStyle()}}' id='{{vm.fieldName}}'><i class='fa fa-{{vm.icon}} fa-{{vm.iconSize}}x'></i>" +  
        // title
        "<span style='padding-left: 10px; font-weight: 700'>{{vm.title}}</span>" +
        //buttons/
        "<div ng-show='vm.showAddButton' ng-click='vm.add()' style='{{vm.getButtonStyle()}}' class='btn btn-default pull-right' style='padding: 3px;'><i class='fa fa-plus'></i> </div>" +
        "<div ng-show='vm.showEditButton' ng-click='vm.edit()' style='{{vm.getButtonStyle()}}'  class='btn btn-default pull-right' style='padding: 3px;'><i class='fa fa-bars'></i> </div>" +
    "</div>" + 
    "<div class='panel-body' ng-transclude></div>" +
    "</div>"
};

angular.module("myComponents").component("myPanel", myPanel);