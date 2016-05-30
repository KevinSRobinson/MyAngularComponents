var okModalButtons = {

    bindings: {
        ok: "&"        
    },
    controllerAs: "vm",
      controller: function(){
        var vm = this;
     
      },
    template: ["<div class='modal-footer'>",
        "<span>",
        "<button type='button'  class='btn btn-default pull-left' id='close'",
        "ng-click='vm.ok()'>OK</button>",
        "</span>",
        "</div>"].join("")
};

var app = angular.module("myComponents").component("okModalButtons", okModalButtons);
