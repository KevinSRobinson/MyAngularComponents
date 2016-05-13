var myCreateButton = {
    bindings: {
        click: "&"
    },
    template: ["<div class='btn btn-success' id='create'",
                " ng-click='$ctrl.click()' >" ,
                " Create <i class='fa fa-plus'></i>",
                " </div>"].join(",")

};


angular.module("myComponents").component("myCreateButton", myCreateButton);



