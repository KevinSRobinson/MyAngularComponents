var myDispalyTextareaField = {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: [
        "<div class='well'><strong>{{$ctrl.fieldLabel}}</strong>",
        "<p>{{$ctrl.ngModel}}</p></div>"].join("")
};


angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);
