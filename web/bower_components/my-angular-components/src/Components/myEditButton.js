var myEditButton = {
    bindings: {
        click: "&",
        id: "@",
        
    },
    controllerAs: "vm",
    controller: function () {
        var vm = this;
        
        if(vm.id==undefined){
            vm.id = "edit"
        }
    
    },
    template: "<button class='btn btn-success btn-sm' id='{{ vm.id }}' ng-click='vm.click(user)'>Edit<i class='fa fa-bars' ></i></button>"
};

angular.module("myComponents").component("myEditButton", myEditButton);
