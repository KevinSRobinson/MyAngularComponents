var myCheckbox = {
  bindings: {
    ngModel: "=",
    fieldLabel: "@",
    icon: "@"
  },
  template: ["<div class='col-md-12' style='margin-top: 10px'>",
                  "<checkbox class='btn-success' ng-model='$ctrl.ngModel'></checkbox>",
                  "<i class='fa {{$ctrl.icon}}'></i>{{$ctrl.fieldLabel}}",
             "</div>"].join("")
};

angular.module("myComponents").component("myCheckbox",myCheckbox);
