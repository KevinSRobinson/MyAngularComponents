var myTextField = {
  
  require: ["^form", "ngModel"],
  bindings: {
    fieldLabel: "@",
    fieldName: "@",
    ngModel: "=",
    required: "@",
  },
  template: ["<div class='form-group'>",
              " <span class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</span>",
              " <input type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel' ng-required='{{ $ctrl.required }}'>",
            "</div>"].join("")
};


angular.module("myComponents").component("myTextField", myTextField);
