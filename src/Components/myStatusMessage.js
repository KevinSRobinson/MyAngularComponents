var myStatusMessage = {
    bindings: {
        ngModel: "<",
        form: "<",
        successMessage:"@"
    },
    controllerAs: "vm",
    controller: function () {
        var vm = this;
        vm.message = "";
        vm.error = false;
        vm.success = false;


        vm.$onChanges =  function (ddd) {
            vm.error = false;
            vm.success = false;

            if (vm.ngModel != null) {
                if (vm.ngModel.ExceptionMessage != undefined) {
                    console.log(vm.ngModel);
                    vm.error = true;
                    vm.message = vm.ngModel.ExceptionMessage;
                }
                else if (vm.ngModel != "") {
                    vm.success = true;
                    vm.message = vm.successMessage;
                }
            }
        };

    },
    template: ["<div ng-hide='vm.form.$dirty'>",
        " <div id='errorMessage' style='margin-top: 10px;' ng-show='vm.error'>",
        " <div class='well' style='color: white; background: red; font-size: large' role='alert'>",
        " <i class='fa fa-warning'></i>{{vm.message}}<br>",
        "<small>This is a system error.  An alert has been send to the developer and will let you know when this has been fixed.</small>",
        " </div>",
        "  </div>",
        "<div id='successMessage' style='margin-top: 10px;' ng-show='vm.success'>",
        " <div class='well' style='color: white; background: green; font-size: large' role='alert'>",
        " <i class='fa fa-check'></i>{{vm.message}}",
        " </div>",
        " </div>",
        " </div>"].join("")
};


angular.module("myComponents").component("myStatusMessage", myStatusMessage);





