var buttons = {
    controllerAs:'vm',
    controller: function() {
        var vm = this;

        vm.buttonEvents = [];

        vm.add = function() {
            vm.buttonEvents.push('Add Button Clicked');
        };

        vm.edit = function() {
            vm.buttonEvents.push('Edit Button Clicked');
        };

        vm.delete = function() {
            vm.buttonEvents.push('Delete Button Clicked');
        };
    },
    templateUrl: 'app/Buttons/buttons.html'
};


angular.module('examples').component('buttons', buttons);
