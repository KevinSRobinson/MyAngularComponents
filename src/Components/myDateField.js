var myDateField = {
  bindings: {
    ngModel: "=",
    fieldName: "=",
    fieldLabel: "@"
  },
  template: [
    "<div class='form-group'>",
    "<label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
    "<div class='input-group'>",
    "<input type='text' class='form-control'",
    " name='{{fieldName}}' id='{{fieldName}}",
    " is-open='$ctrl.opened' ",
    " uib-datepicker-popup='{{$ctrl.format}}' ",
    " datepicker-options='$ctrl.dateOptions' ",
    " ng-model='$ctrl.ngModel' />",
    "<span class='input-group-btn'>",
    "<button type='button' class='btn btn-default' ng-click='$ctrl.open()'><i class='glyphicon glyphicon-calendar'></i></button>",
    " </span>",
    "</div>"].join(""),
  controller: function () {
    this.opened = false;

    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    this.format = this.formats[0];

    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    this.open = function () {
      this.opened = true;
    };
  } 
};


angular.module('myComponents').component('myDateField', myDateField);

