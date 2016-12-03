var myMoodalButtons = {

    bindings: {
        save: "&save",
        close: "&close",
        saveText: "@",
        hideSave: "@",
    },
    controllerAs: "vm",
      controller: function(){
        var vm = this;
        
        vm.savetext= "Save";
         
      },
    template: "modalButtonsTempalte.html"
};

var app = angular.module("myComponents").component("modalButtons", modalButtons);
