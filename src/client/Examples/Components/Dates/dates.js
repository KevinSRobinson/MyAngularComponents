var dates = {
    controllerAs:'vm',
    controller: function() {
       var vm = this;
       vm.dateValue = '2/3/2013';
      

    },
    templateUrl: 'app/Dates/dates.html'
};


angular.module('examples').component('dates', dates);
