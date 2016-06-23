var myTextField = {
    bindings: {
        fieldLabel: "@",
        fieldName: "@",
        ngModel: "=",
        required: "@",
        toolTip:"@"
    },
    controllerAs:"vm",
    controller: function () {
        var vm = this;
        
        
        if(vm.toolTip)
        {
            vm.showToolTip = true;
        }
                
        
        
        if (vm.fieldName == null) {
            vm.fieldName = vm.fieldLabel.replace(" ", "");
            console.log(vm.fieldName);
        }

        if (vm.required == null ) {
            vm.required = false;
        }
    },
    template: ["<div class='form-group'>",
        " <label class='control-label'  style='min-width: 80px !important;' >{{vm.fieldLabel}}</label>",
        " <div class='input-group'  style='width: 80% !important;'>",
        " <input type='text'  class='form-control' id='{{vm.fieldName}}' ng-model='vm.ngModel' ng-required='{{ vm.required }}'>",
        "   <div class='input-group-addon' style='line-height: 0 !important;'  ng-show='vm.showToolTip'><my-popover ng-model='vm.toolTip'></my-popover></div>",
        " </div>",
        "</div>"].join("")
};


angular.module("myComponents").component("myTextField", myTextField);
