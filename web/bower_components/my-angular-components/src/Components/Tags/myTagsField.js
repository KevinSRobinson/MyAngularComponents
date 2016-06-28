var myTagsMultiSelect = {
    bindings: {
        fieldLabel: "@",
        fieldName: "@",
        selected: "=",
        tags: "="
    },
    controllerAs: "vm",
    controller: function () {
           
    },
    template: ["<div class='form-group'>",
        "<span for='tags'>{{vm.fieldLabel}}</span>",
        "<ui-select multiple ng-model='vm.selected' id='tags' >",
        "<ui-select-match placeholder='Select Tag...'>{{$item.Name}}</ui-select-match>",
        "<ui-select-choices repeat='tag in vm.tags'>",
        "<div ng-bind-html='tag.Name'></div>",
        "</ui-select-choices>",
        "</ui-select>",
        "</div>"].join("")
};

angular.module("myComponents").component("myTagsMultiSelect", myTagsMultiSelect);
