var myDisplayCheckField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-2'>",
                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
                    "</div>",
                    "<div class='col-sm-8'>",
                         "<i ng-show='$ctrl.ngModel' class='fa fa-check'></i>",
                    "</div>",
                 "</div>"].join("")
};

angular.module('myComponents').component("myDisplayCheckField", myDisplayCheckField);