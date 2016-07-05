var myPanel = {
    transclude: true,
    bindings: {
        title: "@",
        fieldName: "@",
        style: "@",
        icon: "@",
        iconSize: "@",
        smallHeading: "@",
        showAddButton: "@",
        showEditButton: "@",
        addButtonId: "@",
        editButtonId: "@",
        add: "&",
        edit: "&",
        showFooter: "@",
        footerLeftLabel: "@",
        footerRightLabel: "@"
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";

        var vm = this;


        vm.init = function () {
            vm.setDefaults();
        };

        vm.setDefaults = function () {
            if (vm.showAddButton == undefined) {
                vm.showAddButton = false;
            }
            if (vm.showEditButton == undefined) {
                vm.showEditButton = false;
            }
            if (vm.editButtonId == undefined) {
                vm.editButtonId = "panelEditButton"
            }
            if (vm.addButtonId == undefined) {
                vm.addButtonId = "panelAddButton"
            }
            if (vm.showFooter = undefined) {
                vm.showFooter = false;
            }
            if (vm.footerLeftLabel = undefined) {
                vm.footerLeftLabel = "";
            }
            if (vm.footerRightLabel = undefined) {
                vm.footerRightLabel = "";
            }
        };

        vm.getPanelStyle = function () {
            if (vm.smallHeading != undefined) {
                return "padding: 3px 5px !important; ";
            }
            return "padding: 10px 15px";
        };

        vm.getButtonStyle = function () {
            if (vm.smallHeading != undefined) {
                return "margin-left: 5px; padding: 3px;";
            }
            return "margin-left: 5px; padding: 10px;";
        };

        vm.init();

    },
    template: "<div class='panel panel-{{vm.style}}'>" +
    "<div class='panel-heading' style='{{vm.getPanelStyle()}}' id='{{vm.fieldName}}'><i class='fa fa-{{vm.icon}} fa-{{vm.iconSize}}x'></i>" +
    ////////////
    /// title    
    "<span style='padding-left: 10px; font-weight: 700'>{{vm.title}}</span>" +
    ////////////
    /// buttons
    "<div ng-show='vm.showAddButton' id='{{vm.addButtonId}}' ng-click='vm.add()' style='{{vm.getButtonStyle()}}' class='btn btn-default pull-right' style='padding: 3px;'><i class='fa fa-plus'></i> </div>" +
    "<div ng-show='vm.showEditButton' id='{{vm.editButtonId}}' ng-click='vm.edit()' style='{{vm.getButtonStyle()}}'  class='btn btn-default pull-right' style='padding: 3px;'><i class='fa fa-bars'></i> </div>" +
    "</div>" +
    ////////////
    /// body
    "<div class='panel-body' ng-transclude></div>" + 
    /////////////
    // footer   
    "<div class='panel-footer' ng-if='vm.showFooter' style='{{vm.getPanelStyle()}}' >" +
        " <div class='row'>" +
            " <div class='col-md-6'><span class='pull-left'>{{vm.footerLeftLabel}}</span></div>" +
            " <div class='col-md-6'><span class='pull-right'>{{vm.footerRightLabel}}</span></div>" +
        "</div>" +
    "</div>" +
    "</div>"
};


// " <div class='row'>" +
// " <div class='col-md-6'>{{vm.footerLeftLabel}}</div>"+
// " <div class='col-md-6'>{{vm.footerRightLabel}}</div>"+
// "</div>" +
angular.module("myComponents").component("myPanel", myPanel);