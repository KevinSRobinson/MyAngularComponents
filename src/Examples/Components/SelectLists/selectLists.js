var selectLists = {
    controllerAs: 'vm',
    controller: function() {
        var vm = this;

        vm.fakeItems = [{
            Id: 1,
            Name : 'Kevin'
        }]

    },
    templateUrl: 'app/SelectLists/selectLists.html'
};


angular.module('examples').component('selectLists', selectLists);
