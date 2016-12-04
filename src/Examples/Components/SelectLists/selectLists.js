var selectLists = {
    controllerAs: "vm",
    controller: function() {
        var vm = this;

        vm.fakeItems = [{
            Id: 1,
            Name : "Kevin"
        }]

    },
    templateUrl: "Components/SelectLists/selectLists.html"
};


angular.module("examples").component("selectLists", selectLists);
