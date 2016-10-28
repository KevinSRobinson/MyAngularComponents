var myReportViewer = {
    bindings: {
        reportUrl: "@",
        report: "@",
        serverMode: "@",
        processingMode: "@"
    },
    controllerAs: "vm",
    controller: function () {
        "use strict";

        var vm = this;
        vm.processingMode = "ej.ReportViewer.ProcessingMode.Local";

        vm.init = function () {

            // //set the binding defaults
            // if (vm.processingMode == undefined) {
            //     vm.processingMode = "ej.ReportViewer.ProcessingMode.Local";
            // }
            // else{                
            //     vm.processingMode = "ej.ReportViewer.ProcessingMode.Remote";
            // }

            if (vm.reportUrl == undefined) {
                vm.reportUrl = "/umbraco/api/ReportApi";
            }



        };


        vm.init();
    },
    template: ["dfdfdf<div ej-reportviewer id='container'",
        "e-reportServiceUrl='{{vm.reportUrl}}'",
        "e-processingmode='{{vm.processingMode}}'",
        "e-reportpath='{{vm.report}}' style='height:680px'></div>"].join("")
};


angular.module("myComponents").component("myReportViewer", myReportViewer);
