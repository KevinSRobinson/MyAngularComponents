var myDateField = {
      require: ["^form", "ngModel"],
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
    " uib-datepicker-popup='dd/MM/yyyy' ng-model='$ctrl.ngModel'  is-open='$ctrl.popup1.opened'/> ",
    "<span class='input-group-btn'>",
    "<button type='button' class='btn btn-default' ng-click='$ctrl.open()'>" +
    "<i class='fa fa-calendar'></i></button>",
    " </span>",
    "</div>"].join(""),
  controller: function () {
    // this.opened = false;
    //
    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    this.format = this.formats[0];

    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      minDate: new Date()
    };

    this.popup1 = {
      opened: false
    };

    this.open = function () {
      this.popup1.opened = true;
    };

  }
};


var app = angular.module('myComponents')
  .component('myDateField', myDateField);

