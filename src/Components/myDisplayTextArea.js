var myDispalyTextareaField = {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: [
        "ddasdasdasddd<strong>{{$ctrl.fieldLabel}}</strong>",
        "{{$ctrl}}"].join("")
};


angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);
