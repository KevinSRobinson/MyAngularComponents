var okModalButtons = {

  bindings: {
    close: "&close",
  },
  controllerAs: "vm",
  controller: function () {
    var vm = this;

  },
  template: ["<div class='modal-footer'>",
    "<span>",
    "<button  class='btn btn-default pull-left' id='close' ",
    "ng-click='vm.close()'>OK</button>",
    "</span>",
    "</div>"].join("")
};

var app = angular.module("myComponents").component("okModalButtons", okModalButtons);
