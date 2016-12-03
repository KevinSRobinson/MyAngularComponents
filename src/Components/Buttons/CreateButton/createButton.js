var myCreateButton = {
    bindings: {
        id: "@",
        buttonText: "@",
        click: "&",
        cssClass:"@"
    },
    controllerAs: "vm",
    controller: function(){
        var vm = this;

        //default options
        vm.id = 'create';
        vm.buttonText = "Create";
        vm.icon = "plus";
        vm.cssClass = "btn btn-success";
    },
    templateUrl: "createButtonTemplate.html"
};


angular.module("myComponents").component("myCreateButton", myCreateButton);



