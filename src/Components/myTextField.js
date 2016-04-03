var myTextField = {
  bindings: {
    fieldLabel: "@",
    fieldName: "@",
    ngModel: "="
  },
  controller: function () {
    console.log(this);
  },
  template: ["<div class='form-group'>",
              " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
              " <input type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel'",
            "</div>"].join("")
};


angular.module("myComponents").component("myTextField", myTextField);
