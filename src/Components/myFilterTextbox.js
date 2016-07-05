var myFilterTextbox = {
  bindings: {
    placeholder: "@",
    ngModel: "=",
    fieldName: "@"
  },
  controllerAs: "vm",
  controller: function () {
    "use strict";

    var vm = this;

    if (vm.fieldName == null) {
      vm.fieldName = vm.fieldLabel.replace(" ", "");
    }

    if (vm.placeholder == null) {
      vm.placeholder = "Filter ";
    }
  },
  template: ["<div class='input-group' style='display: flex'>",
    "<input type='text' ng-model='vm.ngModel' placeholder='{{vm.placeholder}}'",
    " id='{{vm.fieldName}}' class='form-control'/>",
    " <button class='btn btn-default class='input-group-btn' ",  
    " id='searchFilter'>", 
    " <i class='glyphicon glyphicon-search'></i> </button>",
    "</div>"].join("")
};


angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);
