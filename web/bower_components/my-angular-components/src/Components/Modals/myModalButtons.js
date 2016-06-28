var modalButtons = {

    bindings: {
        save: "&save",
        close: "&close",
        saveText: "@",
        hideSave: "@",
    },
    controllerAs: "vm",
      controller: function(){
        var vm = this;
        
        if(vm.savetext== undefined){
          vm.savetext= "Save";
        } 
      },
    template: ["<div class='modal-footer'>",
        "<span><button type='submit' id='save' class='btn btn-primary btn-large pull-left'",
        " ng-click='vm.save()'>{{vm.savetext}}</button>",
        "<button type='button'  class='btn btn-default pull-left' id='close'",
        "ng-click='vm.close()'>Close</button>",
        "</span>",
        "</div>"].join("")
};

var app = angular.module("myComponents").component("modalButtons", modalButtons);
