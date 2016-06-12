var myFilterTextbox = {

  require: ["^form", "ngModel"],
  bindings: {
    fieldLabel: "@",
    fieldName: "@",
    ngModel: "=",
    required: "@",
  },
  template: ["<div class='input-group'>",
    "<input class='form-control' id='search' ng-model='vm.ngModel' name='q' placeholder='Search for' required>",
    "<span class='input-group-btn'>",
    "  <i class='fa fa-search'></i>",
    "</span>",
    "</div>"].join("")
};


angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);
