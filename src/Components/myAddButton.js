var myAddButton = {
    bindings: {
        click: "&"
    },
    template: ["<div class='btn btn-default' id='add'",
                " ng-click='$ctrl.ngClick(site)' >" ,
                " <i class='fa fa-plus' ></i>",
                " </div>"
    ].join(",")

};


angular.module("myComponents").component("myAddButton", myAddButton);



