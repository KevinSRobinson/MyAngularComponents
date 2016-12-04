var checkBoxes = {
    controller: function($location) {
        var vm = this;
        vm.add = function() {
            alert('Add Clicked');
        };

        vm.edit = function() {
            alert('Edit Clicked');
        };
    },
    templateUrl: "Components/CheckBoxes/checkBoxes.html"
};


angular.module("examples").component("checkBoxes", checkBoxes);
