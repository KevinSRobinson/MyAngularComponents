var mySelectList = {
    bindings: {
        ngModel: "=",
        items: "=",
        fieldLabel: "@",
        fieldName: "@"
    },
    controllerAs: "vm",
    controller: function () {

    },
    template: ["<div class='form-group'>",
        " <label class='control-label' style='min-width: 110px; text-align: left'>{{vm.fieldLabel}}</label>",
        "<select ng-model='vm.ngModel' class='form-control' id='{{vm.fieldName}}'>",
        " <option ng-repeat='option in vm.items' value='{{option.Id}}'>{{option.Name}}</option>",
        "</select>",
        "</div>"].join("")

};
// convert-to-number


angular.module("myComponents").component("mySelectList", mySelectList);


