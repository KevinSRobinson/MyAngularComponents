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

    vm.fieldName = "filterTextBox";
    vm.placeholder = "Filter ";
    
  },
  templateUrl: "FilterTemplate.html"
};


angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);
