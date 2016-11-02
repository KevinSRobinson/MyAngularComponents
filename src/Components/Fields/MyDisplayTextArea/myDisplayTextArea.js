var myDispalyTextareaField = {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    controllerAs:"vm",
    controller: function(){
      var vm = this;
      vm.fieldLabel = "You can set this text using field-label=''";
      
    },
    templateUrl:"myDisplayTextArea.html"
};


angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);
