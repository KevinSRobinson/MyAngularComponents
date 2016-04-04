var myTextareaField = {
  bindings: {
    fieldLabel: "@",
    fieldName: "@",
    ngModel: "="
  },
  template: ["<div class='form-group'>",
              " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
              " <textarea type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel'",
            "</div>"].join("")
};


angular.module("myComponents").component("myTextareaField", myTextareaField);
