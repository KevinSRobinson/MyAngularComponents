var mySpinner= {
    bindings: {
        ngModel: "="
    },
    template: "<i ng-show='$ctrl.ngModel'  class='fa fa-circle-o-notch fa-spin fa-5x'></i>"
};


angular.module("myComponents").component("mySpinner", mySpinner);



