var myModalHeader = {
    bindings: {
        title: "@"
    },
   templateUrl: 'app/Modals/ModalHeader/modalHeaderTemplate.html'
};


var app = angular.module("myComponents").component("myModalHeader", myModalHeader);
