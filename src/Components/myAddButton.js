var myCreateButton = {
    bindings: {
        click: "&"
    },
    template: ["<div class='btn btn-default' id='create'",
                " ng-click='$ctrl.click()' >" ,
                " <i class='fa fa-plus' ></i>",
                " </div>"
    ].join(",")

};


angular.module("myComponents").component("myCreateButton", myCreateButton);



