var myTextField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        ngModel: '=',
        required: '@',
        toolTip:'@'
    },
    controllerAs:'vm',
    controller: function () {
        var vm = this;
        
        if(vm.toolTip)
        {
            vm.showToolTip = true;
        }
        
        if (vm.fieldName == null) {
            vm.fieldName = vm.fieldLabel.replace(' ', '');            
        }

        if (vm.required == null ) {
            vm.required = false;
        }
    },
     templateUrl: 'app/Fields/TextField/textFieldTemplate.html'
};


angular.module('myComponents').component('myTextField', myTextField);
