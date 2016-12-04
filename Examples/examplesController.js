var examplesController =  function($rootScope, $location) {
     var vm = this;
        
     vm.exampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol";
     vm.test = "Some TExt";
     vm.date = new Date();
     vm.defaultDate = new Date(1, 1, 0000);


     vm.FirstName = "kevin";


     vm.tags = [{
         id: 3,
         Name: "Test 1"
     }];

     vm.selectedTag = {};
 
 };

 

 angular.module('examples').controller("examplesController", examplesController);
 