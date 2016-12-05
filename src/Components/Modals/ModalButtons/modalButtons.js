var modalButtons = {

    bindings: {
        save: '&save',
        close: '&close',
        saveText: '@',
        hideSave: '@',
    },
    controllerAs: 'vm',
      controller: function(){
        var vm = this;
        
        
        vm.savetext= 'Save';
         
      },
    templateUrl: 'app/Modals/ModalButtons/modalButtonsTemplate.html'
};

var app = angular.module('myComponents').component('modalButtons', modalButtons);
