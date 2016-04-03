var myTagsMultiSelect = {
  bindings: {
    fieldLabel: "@",
    fieldName: "@",
    ngModel: "=",
    tags: "="
  },
  template: ["<div class='form-group'>",
              "<label for='tags'>{{$ctrl.fieldLabel}}</label>",
              "<ui-select multiple ng-model='$ctrl.ngModel' id='tags' >",
              "<ui-select-match placeholder='Select Tag...'>{{$item.Name}}</ui-select-match>",
              "<ui-select-choices repeat='tag in $ctrl.tags'>",
              "<div ng-bind-html='tag.Name'></div>",
              "</ui-select-choices>",
              "</ui-select>",
              "</div>"].join("")
};

angular.module("myComponents").component("myTagsMultiSelect", myTagsMultiSelect);
