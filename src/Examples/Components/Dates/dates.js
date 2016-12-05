var dates = {
    controllerAs:'vm',
    controller: function() {
       var vm = this;
       vm.dateValue = '2/3/2013';
       
       vm.date = new Date();
       vm.defaultDate = new Date(1, 1, 0000);
    },
    templateUrl: 'app/Dates/dates.html'
};


angular.module('examples').component('dates', dates);
