angular.module('myComponents').run(['$templateCache', function($templateCache) {$templateCache.put('myDateField.html','<md-icon md-svg-icon="social:android" aria-label="android "></md-icon>\n<div class=\'form-group\'>\n        <!--label-->\n        <label class=\'control-label\' style=\'min-width: 110px; text-align: left\'>{{vm.fieldLabel}}</label>\n        \n        <!--datepicker-->\n        <div class=\'input-group\'>\n                <input type=\'text\' class=\'form-control\' id=\'{{vm.fieldName}}\' uib-datepicker-popup=\'dd-MMMM-yyyy\' ng-model=\'vm.ngModel\' datepicker-options=\'vm.dateOptions\' is-open=\'vm.popup1.opened\' />\n                <span class=\'input-group-btn\'>\n                        <button type=\'button\' class=\'btn btn-default\' ng-click=\'vm.open()\'> \n                                <i class=\'fa fa-calendar\'></i>\n                        </button>\n                 </span>\n                <div class=\'input-group-addon\' style=\'line-height: 0 !important;\' ng-show=\'vm.showToolTip\'>\n                        <my-popover ng-model=\'vm.toolTip\'></my-popover>\n                </div>\n        </div>\n</div>\n');
$templateCache.put('myDisplayField.html','<div class=\'row\'>\n    \n    <!--Label-->\n    <div class=\'{{vm.fieldLabelWitdh}}\'>\n        <label class=\'control-label\'><strong>{{vm.fieldLabel}}</strong></label>\n    </div>\n    \n    <!--Field-->\n    <div class=\'col-sm-6\'>\n        {{vm.ngModel}}\n    </div>\n</div>\n');
$templateCache.put('myDisplayTextArea.html','<div class=\'well\'><strong>{{vm.fieldLabel}}</strong>\n    <p>{{vm.ngModel}}</p>\n</div>\n');
$templateCache.put('myCheckboxField.html','<input type="checkbox" class="nodetext" id="check1" />\n<label for="check1" class="clslab">Music</label></td>\n                                        ');
$templateCache.put('myStatusAlert.html','<div ng-hide=\'vm.form.$dirty\'>\n        <div id=\'errorMessage\' style=\'margin-top: 10px;\' ng-show=\'vm.error\'>\n                <div class=\'well\' style=\'color: white; background: red; font-size: large\' role=\'alert\'>\n                        <i class=\'fa fa-warning\'></i>{{vm.message}}<br>\n                        <small>This is a system error.  An alert has been send to the developer and will let you know when this has been fixed.</small>\n                </div>\n        </div>\n        <div id=\'successMessage\' style=\'margin-top: 10px;\' ng-show=\'vm.success\'>\n                <div class=\'well\' style=\'color: white; background: green; font-size: large\' role=\'alert\'>\n                        <i class=\'fa fa-check\'></i>{{vm.message}}\n                </div>\n        </div>\n</div>\n');
$templateCache.put('moreLessPanel.html','<div class=\'panel panel-{{vm.style}}\' style=\'{{vm.getPanelStyle()}}\'>\n    <div class=\'panel-heading\' style=\'{{vm.getPanelHeadingStyle()}}\' id=\'{{vm.fieldName}}\'><i class=\'fa fa-{{vm.icon}} fa-{{vm.iconSize}}x\'></i>\n\n        <span style=\'padding-left: 10px; font-weight: 700\'>{{vm.title}}</span>\n\n        <div ng-show=\'vm.showAddButton\' id=\'{{vm.addButtonId}}\' ng-click=\'vm.add()\' style=\'{{vm.getButtonStyle()}}\' class=\'btn btn-default pull-right\' style=\'padding: 3px;\'><i class=\'fa fa-plus\'></i> </div>\n        <div ng-show=\'vm.showEditButton\' id=\'{{vm.editButtonId}}\' ng-click=\'vm.edit()\' style=\'{{vm.getButtonStyle()}}\' class=\'btn btn-default pull-right\' style=\'padding: 3px;\'><i class=\'fa fa-bars\'></i> </div>\n    </div>\n\n    <div class=\'panel-body\' ng-transclude style=\'{{vm.getPanelContentStyle()}}\'  ng-if="!vm.isCollapsed">\n         {{vm.ngModel}}\n    </div>\n\n    <div class=\'panel-footer\' ng-if=\'vm.showFooter\' style=\'{{vm.getPanelStyle()}}\'>\n        <div class=\'row\'>\n            <div class=\'col-md-6\'><span class=\'pull-left\'>{{vm.footerLeftLabel}}</span></div>\n            <div class=\'col-md-6\'><span class=\'pull-right\'>{{vm.footerRightLabel}}</span></div>\n        </div>\n    </div>\n</div>\n');
$templateCache.put('mySelectList.html','<div class=\'form-group\'>\n    \n    <!--Label-->\n    <label class=\'control-label\' style=\'min-width: 110px; text-align: left\'>{{vm.fieldLabel}}</label>\n    \n    <!-- Select -->\n    <select ng-model=\'vm.ngModel\' class=\'form-control\' id=\'{{vm.fieldName}}\'>\n         <option ng-repeat=\'option in vm.items\' value=\'{{option.Id}}\'>{{option.Id}}</option>\n    </select>\n    \n</div>\n');
$templateCache.put('mySelectListByName.html','<div class=\'form-group\'>\n    \n    <!--Label-->\n    <label class=\'control-label\' style=\'min-width: 110px; text-align: left\'>{{$ctrl.fieldLabel}}</label>\n    \n    <!--Select-->\n    <select ng-model=\'$ctrl.ngModel\' id=\'$ctrl.fieldName\' class=\'form-control\' convert-to-number>\n         <option ng-repeat=\'option in $ctrl.items\' value=\'{{option.Name}}\'>{{option.Name}}</option>\n    </select>\n</div>\n');}]);