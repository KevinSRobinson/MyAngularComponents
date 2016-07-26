var myTagsMultiSelect = {
    bindings: {
        fieldLabel: "@",
        fieldName: "@",
        selected: "=",
        tags: "="
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";
        
        var vm = this;
        
           console.log(vm.tags);
        
    },
    template: ["<div class='form-group'>",
        "<span for='tags'>{{vm.fieldLabel}}</span>",
        "<ui-select multiple ng-model='vm.selected' id='tags' >",
        "<ui-select-match placeholder='Select Tag...'>{{vm.Name}}</ui-select-match>",
        "<ui-select-choices repeat='tag in vm.tags'>",
        "<div ng-bind-html='tag'></div>",
        "</ui-select-choices>",
        "</ui-select>",
        "</div>"].join("")
};

angular.module("myComponents").component("myTagsMultiSelect", myTagsMultiSelect);
