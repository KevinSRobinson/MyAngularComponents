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
        " <label class='control-label'  >{{vm.fieldLabel}}</label>",
        " <div class='input-group'>",
        " <input type='text'  class='form-control' id='{{vm.fieldName}}' ng-model='vm.ngModel' ng-required='{{ vm.required }}'>",
        "   <div class='input-group-addon' ng-show='vm.showToolTip'><my-popover ng-model='vm.toolTip'></my-popover></div>",
        " </div>",
        "</div>"].join("")
};


angular.module("myComponents").component("myTextField", myTextField);
