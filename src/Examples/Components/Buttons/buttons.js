var buttons = {
    controller: function($location) {
        var vm = this;
        vm.add = function() {
            alert('Add Clicked');
        };

        vm.edit = function() {
            alert('Edit Clicked');
        };
    },
    templateUrl: 'Components/Buttons/buttons.html'
};


angular.module('examples').component('buttons', buttons);
