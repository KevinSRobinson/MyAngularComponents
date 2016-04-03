var mySelectListByName = {
  bindings: {
    ngModel: "=",
    items: "=",
    fieldLabel: "@"
  },
  controller: function(){

  },
  template: ["<div class='form-group'>",
                " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
                  "<select ng-model='$ctrl.ngModel' class='form-control' convert-to-number>",
                " <option ng-repeat='option in $ctrl.items' value='{{option.Name}}'>{{option.Name}}</option>",
                  "</select>",
            "</div>"].join("")

};

angular.module("myComponents").component("mySelectListByName", mySelectListByName);


