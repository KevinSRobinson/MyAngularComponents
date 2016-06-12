var myDisplayCheckField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-8'>",
                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
                    "</div>",
                    "<div class='col-sm-2'>",
                         "<i ng-show='$ctrl.ngModel' class='fa fa-check fa-2x'></i>",
                    "</div>",
                 "</div>"].join("")
};
angular.module('myComponents').component("myDisplayCheckField", myDisplayCheckField);