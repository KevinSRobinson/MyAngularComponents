var myPageTitle = {
    bindings: {
        title: "@"
    },
    controllerAs: "vm",
    template: "pageHeaderTemplate.html"
};


angular.module("myComponents").component("myPageTitle", myPageTitle);



