var myPageTitle = {
    bindings: {
        title: "@"
    },
    controllerAs: "vm",
    template: "<H1 id='pagetitle'>{{ vm.title }}</H1>"
};


angular.module("myComponents").component("myPageTitle", myPageTitle);



