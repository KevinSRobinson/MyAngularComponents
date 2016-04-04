var myCheckboxField = {
  bindings: {
    ngModel: "=",
    fieldLabel: "@",
    icon: "@"
  },
  template: ["<div class='row'>",
                "<div class='col-md-4' style='margin-top: 10px'>",
                    "<input type='checkbox' ng-model='$ctrl.ngModel'></checkbox>",
                  "</div>",
                   "<div class='col-md-8' style='margin-top: 10px'>",
                    "<i class='fa {{$ctrl.icon}}'></i>{{$ctrl.fieldLabel}}",
                "</div>",
             "</div>"].join("")
};

angular.module("myComponents").component("myCheckboxField", myCheckboxField);
