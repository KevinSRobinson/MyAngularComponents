var myErrorMessage = {
  bindings:{
    ngModel:"="
  },
  template:  "<h3>{{$ctrl.ngModel.data}}</h3><div id=errorMessage' style='margin-top: 10px;' " +
            " ng-show='$ctrl.ngModel.data'>" +
            " <div class='well' style='color: white; background: red; font-size: large' role='alert'>" +
            " <i class='fa fa-warning'></i>{{$ctrl.ngModel.data.ExceptionMessage}}</div>" +
            " </div>"
};


angular.module("myComponents").component("myErrorMessage", myErrorMessage);
