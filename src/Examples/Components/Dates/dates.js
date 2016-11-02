var dates = {
    controllerAs:"vm",
    controller: function() {
       var vm = this;
       
       
       vm.date = new Date();
       vm.defaultDate = new Date(1, 1, 0000);
    },
    templateUrl: "Components/Dates/dates.html"
};


angular.module("examples").component("dates", dates);
