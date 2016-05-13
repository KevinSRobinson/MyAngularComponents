var myDeleteButton = {
    bindings: {
        click: "&"
    },
    template: ["<div class='btn btn-danger' id='delete'",
                " ng-click='$ctrl.click()' >" ,
                " <i class='fa fa fa-times' ></i>",
                " </div>"
    ].join(",")

};


angular.module("myComponents").component("myDeleteButton", myDeleteButton);



