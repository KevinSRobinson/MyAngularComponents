var myPanel = {
    transclude: true,
    bindings: {
        title: '@',
        fieldName: '@',
        style: '@',
        icon: '@',
        iconSize: '@',
        smallHeading: '@',
        showAddButton: '@',
        showEditButton: '@',
        addButtonId: '@',
        editButtonId: '@',
        add: '&',
        edit: '&',
        showFooter: '@',
        footerLeftLabel: '@',
        footerRightLabel: '@',
        height: '@',
        showVerticalScrollBar: '@',
        buttonText:'@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;
        vm.buttonText = '';
        vm.isCollapsed = false;
         vm.ngModel = 'You can set this text using ng-model'
        
        vm.getButtonText = function() {
            if (vm.isCollapsed) {
                return 'More Search Options';
            }
            else {
                return 'Fewer Search Options';
            }
        };

        vm.getButtonIcon = function() {

            if (vm.isCollapsed) {
                return 'fa fa-arrow-down';
            }
            else {
                return 'fa fa-arrow-up';
            }
        };

        vm.init = function () {
            vm.setDefaults();
        };

        vm.setDefaults = function () {
            if (vm.height == undefined) {
                vm.height = 150;
            }

            if (vm.showVerticalScrollBar == undefined) {
                vm.showVerticalScrollBar = false;
            }
            
            if (vm.showAddButton == undefined) {
                vm.showAddButton = false;
            }
            if (vm.showEditButton == undefined) {
                vm.showEditButton = false;
            }
            if (vm.editButtonId == undefined) {
                vm.editButtonId = 'panelEditButton'
            }
            if (vm.addButtonId == undefined) {
                vm.addButtonId = 'panelAddButton'
            }
            if (vm.showFooter = undefined) {
                vm.showFooter = false;
            }
            if (vm.footerLeftLabel = undefined) {
                vm.footerLeftLabel = '';
            }
            if (vm.footerRightLabel = undefined) {
                vm.footerRightLabel = '';
            }
        };


        vm.getPanelStyle = function () {

            var s = 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            console.log(s);
            
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            
        };
        
        vm.getPanelHeadingStyle = function () {
           if (vm.smallHeading != undefined) {
                return   'padding: 3px 5px !important; ';
            }
            return   'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return 'overflow-y: auto;'
        };

        
        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if(showVerticalScrollBar){
                return 'scroll';
            }
            else {
                return 'hidden';
            }
        };

        vm.getButtonStyle = function () {
            if (vm.smallHeading != undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };

        vm.init();

    },
    templateUrl: 'app/Panels/MoreLessPanel/moreLessPanelTemplate.html' 
};

