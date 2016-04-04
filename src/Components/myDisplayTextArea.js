var myDispalyTextareaField = {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: [
        "<strong>{{$ctrl.fieldLabel}}</strong>",
        "{{$ctrl.ngModel}}"].join("")
};


angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);
