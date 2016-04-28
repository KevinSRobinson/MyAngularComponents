var myCheckboxField = {
  bindings: {
    ngModel: "=",
    fieldLabel: "@",
    icon: "@"
  },
  template: ["<div class='row'>",
                "<div class='col-md-2' style='margin-top: 10px'>",
                    "<checkbox class='btn-success' type='checkbox' ng-model='$ctrl.ngModel'></checkbox>",
                  "</div>",
                   "<div class='col-md-10' style='margin-top: 10px'>",
                    "<i class='fa {{$ctrl.icon}}'></i>{{$ctrl.fieldLabel}}",
                "</div>",
             "</div>"].join("")
};

angular.module("myComponents").component("myCheckboxField", myCheckboxField);
