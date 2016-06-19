var myDisplayField = {
	    bindings: {
	        fieldLabel: '@',
	        ngModel: '=',
			fieldLabelWitdh: "@"
	    },
		controllerAs: "vm",
		controller: function () {
			var vm = this;
			
			if(vm.fieldLabelWitdh == undefined) {
				vm.fieldLabelWitdh = "col-md-4"
			};
		},
	    template: ["<div class='row'>",
	                    "<div class='{{vm.fieldLabelWitdh}}'>",
	                         "<label class='control-label'><strong>{{vm.fieldLabel}}</strong></label>",
	                    "</div>",
	                    "<div class='col-sm-6'>",
	                         "{{vm.ngModel}}",
	                    "</div>",
	                 "</div>"].join("")
};

var app = angular.module('myComponents').component("myDisplayField", myDisplayField);