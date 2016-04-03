var myEditButton = {
    bindings: {
        ngClick: "&"
    },
    template: ["<div class='btn btn-default' ",
                " ng-click='$ctrl.ngClick(site)' >" ,
                " <i class='fa fa-bars' ></i>",
                " </div>"
    ].join(",")

};


angular.module("myComponents").component("myEditButton", myEditButton);



