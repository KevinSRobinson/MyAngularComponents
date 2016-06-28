var myFilterTextbox = {

  require: ["ngModel"],
  bindings: {
    placeholder: "@",
    fieldName: "@",
    ngModel: "="
  },
  controllerAs: "vm",
  controller: function () {
    "use strict";

    var vm = this;

  },
  template: ["<div class='input-group' style='display: flex'>",
    "<input type='text' ng-model='vm.ngModel' ", 
    " id='postcodeLookup' class='form-control'/>",
    " <button class='btn btn-default class='input-group-btn' ",  
    " id='searchFilter'>", 
    " <i class='glyphicon glyphicon-search'></i> </button>",
    "</div>"].join("")
};


angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);
