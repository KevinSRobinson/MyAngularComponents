/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	//
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);

	__webpack_require__(5);
	__webpack_require__(6);


	__webpack_require__(7);


	__webpack_require__(8);
	__webpack_require__(9);

	__webpack_require__(7);

	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);

	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);



	__webpack_require__(22);






			
			

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module("myComponents", ['ngAnimate', 'ui.bootstrap']);




/***/ },
/* 2 */
/***/ function(module, exports) {

	var myFilterTextbox = {

	  require: ["ngModel"],
	  bindings: {
	    placeholder: "@",
	    fieldName: "@",
	    ngModel: "="
	  },
	  controllerAs: "vm",
	  controller: function () {
	    "use strict";

	    var vm = this;

	  },
	  template: ["<div class='input-group' style='display: flex'>",
	    "<input type='text' ng-model='vm.ngModel' ", 
	    " id='postcodeLookup' class='form-control'/>",
	    " <button class='btn btn-default class='input-group-btn' ",  
	    " id='searchFilter'>", 
	    " <i class='glyphicon glyphicon-search'></i> </button>",
	    "</div>"].join("")
	};


	angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);


/***/ },
/* 3 */
/***/ function(module, exports) {

	var myPopover = {
	    bindings: {
	        ngModel: "<"
	    },
	    controllerAs: "vm",
	    template: ["<span class='glyphicon glyphicon glyphicon-question-sign' ",
	        " style='font-size: large;color: blue;' ",
	        " uib-popover='{{vm.ngModel}}'",
	        "  popover-trigger='mouseenter' ",
	        " popover-placement='right'",
	        " aria-hidden='true'>"].join("")
	};


	angular.module("myComponents").component("myPopover", myPopover);


/***/ },
/* 4 */
/***/ function(module, exports) {

	var myTextField = {
	    bindings: {
	        fieldLabel: "@",
	        fieldName: "@",
	        ngModel: "=",
	        required: "@",
	        toolTip:"@"
	    },
	    controllerAs:"vm",
	    controller: function () {
	        var vm = this;
	        
	        
	        if(vm.toolTip)
	        {
	            vm.showToolTip = true;
	        }
	                
	        
	        
	        if (vm.fieldName == null) {
	            vm.fieldName = vm.fieldLabel.replace(" ", "");
	            console.log(vm.fieldName);
	        }

	        if (vm.required == null ) {
	            vm.required = false;
	        }
	    },
	    template: ["<div class='form-group'>",
	        " <label class='control-label'  style='min-width: 80px !important;' >{{vm.fieldLabel}}</label>",
	        " <div class='input-group'  style='width: 80% !important;'>",
	        " <input type='text'  class='form-control' id='{{vm.fieldName}}' ng-model='vm.ngModel' ng-required='{{ vm.required }}'>",
	        "   <div class='input-group-addon' style='line-height: 0 !important;'  ng-show='vm.showToolTip'><my-popover ng-model='vm.toolTip'></my-popover></div>",
	        " </div>",
	        "</div>"].join("")
	};


	angular.module("myComponents").component("myTextField", myTextField);


/***/ },
/* 5 */
/***/ function(module, exports) {

	var myTextareaField = {
	      require: ["^form", "ngModel"],
	  bindings: {
	    fieldLabel: "@",
	    fieldName: "@",
	    ngModel: "=",
	    required: "@",
	  },
	  template: ["<div class='form-group'>",
	              " <span class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</span>",
	              " <textarea type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel' ng-required='{{ $ctrl.required }}'>",
	            "</div>"].join("")
	};


	angular.module("myComponents").component("myTextareaField", myTextareaField);


/***/ },
/* 6 */
/***/ function(module, exports) {

	var myDispalyTextareaField = {
	   bindings: {
	        fieldLabel: '@',
	        ngModel: '='
	    },
	    template: [
	        "<div class='well'><strong>{{$ctrl.fieldLabel}}</strong>",
	        "<p>{{$ctrl.ngModel}}</p></div>"].join("")
	};


	angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);


/***/ },
/* 7 */
/***/ function(module, exports) {

	var myDateField = {
	      require: ["^form", "ngModel"],
	  bindings: {
	    ngModel: "=",
	    fieldName: "=",
	    fieldLabel: "@"
	  },
	  template: [
	    "<div class='form-group'>",
	    "<label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
	    "<div class='input-group'>",
	    "<input type='text' class='form-control'",
	    " uib-datepicker-popup='dd/MM/yyyy' ng-model='$ctrl.ngModel'  is-open='$ctrl.popup1.opened'/> ",
	    "<span class='input-group-btn'>",
	    "<button type='button' class='btn btn-default' ng-click='$ctrl.open()'>" +
	    "<i class='fa fa-calendar'></i></button>",
	    " </span>",
	    "</div>"].join(""),
	  controller: function () {
	    // this.opened = false;
	    //
	    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	    this.format = this.formats[0];

	    this.dateOptions = {
	      formatYear: 'yy',
	      startingDay: 1,
	      minDate: new Date()
	    };

	    this.popup1 = {
	      opened: false
	    };

	    this.open = function () {
	      this.popup1.opened = true;
	    };

	  }
	};


	var app = angular.module('myComponents')
	  .component('myDateField', myDateField);



/***/ },
/* 8 */
/***/ function(module, exports) {

	var myCheckboxField = {
	  bindings: {
	    ngModel: "=",
	    fieldLabel: "@",
	    icon: "@"
	  },
	  template: ["<div class='row'>",
	                "<div class='col-md-2' style='margin-top: 10px'>",
	                    "<checkbox class='btn-success' type='checkbox' ng-model='$ctrl.ngModel'></checkbox>",
	                  "</div>",
	                  
	                   "<div class='col-md-10' style='margin-top: 10px'>",
	                    "<i class='fa {{$ctrl.icon}}'></i>{{$ctrl.fieldLabel}}",
	                "</div>",
	             "</div>"].join("")
	};

	angular.module("myComponents").component("myCheckboxField", myCheckboxField);


/***/ },
/* 9 */
/***/ function(module, exports) {

	var myDisplayCheckField = {
	    bindings: {
	        fieldLabel: '@',
	        ngModel: '='
	    },
	    template: ["<div class='row'>",
	                    "<div class='col-sm-8'>",
	                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
	                    "</div>",
	                    "<div class='col-sm-2'>",
	                         "<i ng-show='$ctrl.ngModel' class='fa fa-check fa-2x'></i>",
	                    "</div>",
	                 "</div>"].join("")
	};
	angular.module('myComponents').component("myDisplayCheckField", myDisplayCheckField);

/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	var modalButtons = {

	    bindings: {
	        save: "&save",
	        close: "&close",
	        saveText: "@",
	        hideSave: "@",
	    },
	    controllerAs: "vm",
	      controller: function(){
	        var vm = this;
	        
	        if(vm.savetext== undefined){
	          vm.savetext= "Save";
	        } 
	      },
	    template: ["<div class='modal-footer'>",
	        "<span><button type='submit' id='save' class='btn btn-primary btn-large pull-left'",
	        " ng-click='vm.save()'>{{vm.savetext}}</button>",
	        "<button type='button'  class='btn btn-default pull-left' id='close'",
	        "ng-click='vm.close()'>Close</button>",
	        "</span>",
	        "</div>"].join("")
	};

	var app = angular.module("myComponents").component("modalButtons", modalButtons);


/***/ },
/* 12 */
/***/ function(module, exports) {

	var okModalButtons = {

	  bindings: {
	    close: "&close",
	  },
	  controllerAs: "vm",
	  controller: function () {
	    var vm = this;

	  },
	  template: ["<div class='modal-footer'>",
	    "<span>",
	    "<button  class='btn btn-default pull-left' id='close' ",
	    "ng-click='vm.close()'>OK</button>",
	    "</span>",
	    "</div>"].join("")
	};

	var app = angular.module("myComponents").component("okModalButtons", okModalButtons);


/***/ },
/* 13 */
/***/ function(module, exports) {

	var modalHeader = {
	    bindings: {
	        title: "@"
	    },
	    template: ["<div class='modal-header'>",
	        "<h3 class='modal-title'>{{$ctrl.title}}</h3>",
	        "</div>"].join("")
	};


	var app = angular.module("myComponents").component("modalHeader", modalHeader);


/***/ },
/* 14 */
/***/ function(module, exports) {

	var mySelectList = {
	  bindings: {
	    ngModel: "=",
	    items: "=",
	    fieldLabel: "@"
	  },
	  controller: function(){

	  },
	  template: ["<div class='form-group'>",
	                " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
	                  "<select ng-model='$ctrl.ngModel' class='form-control' convert-to-number>",
	                " <option ng-repeat='option in $ctrl.items' value='{{option.Id}}'>{{option.Name}}</option>",
	                  "</select>",
	            "</div>"].join("")

	};

	angular.module("myComponents").component("mySelectList", mySelectList);




/***/ },
/* 15 */
/***/ function(module, exports) {

	var mySpinner= {
	    bindings: {
	        ngModel: "="
	    },
	    template: "<i ng-show='$ctrl.ngModel'  class='fa fa-circle-o-notch fa-spin fa-5x'></i>"
	};


	angular.module("myComponents").component("mySpinner", mySpinner);





/***/ },
/* 16 */
/***/ function(module, exports) {

	var myErrorMessage = {
	  bindings:{
	    ngModel:"="
	  },
	  template:  "<h3>{{$ctrl.ngModel.data}}</h3><div id=errorMessage' style='margin-top: 10px;' " +
	            " ng-show='$ctrl.ngModel.data'>" +
	            " <div class='well' style='color: white; background: red; font-size: large' role='alert'>" +
	            " <i class='fa fa-warning'></i>{{$ctrl.ngModel.data.ExceptionMessage}}</div>" +
	            " </div>"
	};


	angular.module("myComponents").component("myErrorMessage", myErrorMessage);


/***/ },
/* 17 */
/***/ function(module, exports) {

	var myPageTitle = {
	    bindings: {
	        title: "@"
	    },
	    controllerAs: "vm",
	    template: "<H1 id='pagetitle'>{{ vm.title }}</H1>"
	};


	angular.module("myComponents").component("myPageTitle", myPageTitle);





/***/ },
/* 18 */
/***/ function(module, exports) {

	var myStatusMessage = {
	    bindings: {
	        ngModel: "<",
	        form: "<",
	        successMessage:"@"
	    },
	    controllerAs: "vm",
	    controller: function () {
	        var vm = this;
	        vm.message = "";
	        vm.error = false;
	        vm.success = false;


	        vm.$onChanges =  function (ddd) {
	            vm.error = false;
	            vm.success = false;

	            if (vm.ngModel != null) {
	                if (vm.ngModel.ExceptionMessage != undefined) {
	                    console.log(vm.ngModel);
	                    vm.error = true;
	                    vm.message = vm.ngModel.ExceptionMessage;
	                }
	                else if (vm.ngModel != "") {
	                    vm.success = true;
	                    vm.message = vm.successMessage;
	                }
	            }
	        };

	    },
	    template: ["<div ng-hide='vm.form.$dirty'>",
	        " <div id='errorMessage' style='margin-top: 10px;' ng-show='vm.error'>",
	        " <div class='well' style='color: white; background: red; font-size: large' role='alert'>",
	        " <i class='fa fa-warning'></i>{{vm.message}}<br>",
	        "<small>This is a system error.  An alert has been send to the developer and will let you know when this has been fixed.</small>",
	        " </div>",
	        "  </div>",
	        "<div id='successMessage' style='margin-top: 10px;' ng-show='vm.success'>",
	        " <div class='well' style='color: white; background: green; font-size: large' role='alert'>",
	        " <i class='fa fa-check'></i>{{vm.message}}",
	        " </div>",
	        " </div>",
	        " </div>"].join("")
	};


	angular.module("myComponents").component("myStatusMessage", myStatusMessage);







/***/ },
/* 19 */
/***/ function(module, exports) {

	var myEditButton = {
	    bindings: {
	        click: "&",
	        id: "@",
	        
	    },
	    controllerAs: "vm",
	    controller: function () {
	        var vm = this;
	        
	        if(vm.id==undefined){
	            vm.id = "edit"
	        }
	    
	    },
	    template: "<button class='btn btn-success btn-sm' id='{{ vm.id }}' ng-click='vm.click(user)'>Edit<i class='fa fa-bars' ></i></button>"
	};

	angular.module("myComponents").component("myEditButton", myEditButton);


/***/ },
/* 20 */
/***/ function(module, exports) {

	var myCreateButton = {
	    bindings: {
	        click: "&"
	    },
	    template: ["<div class='btn btn-success' id='create'",
	                " ng-click='$ctrl.click()' >" ,
	                " Create <i class='fa fa-plus'></i>",
	                " </div>"].join(",")

	};


	angular.module("myComponents").component("myCreateButton", myCreateButton);





/***/ },
/* 21 */
/***/ function(module, exports) {

	var myDeleteButton = {
	    bindings: {
	        click: "&"
	    },
	    template: ["<div class='btn btn-danger' id='delete'",
	                " ng-click='$ctrl.click()' >" ,
	                " Delete<i class='fa fa fa-times' ></i> ",
	                " </div>"].join(",")

	};


	angular.module("myComponents").component("myDeleteButton", myDeleteButton);





/***/ },
/* 22 */
/***/ function(module, exports) {

	var myPanel = {
	    transclude: true,
	    bindings: {
	        title: "@",
	        fieldName: "@",
	        style: "@",
	        icon: "@",
	        iconSize: "@"
	    },
	    controllerAs:"vm",
	    template: "<div class='panel panel-default {{vm.style}}'>" +
	    "<div class='panel-heading' id='{{vm.fieldName}}'><i class='fa fa-{{vm.icon}} fa-{{vm.iconSize}}x'></i>{{vm.title}}</div>" +
	    "<div class='panel-body' ng-transclude></div>" +
	    "</div>",
	};

	angular.module("myComponents").component("myPanel", myPanel);

/***/ }
/******/ ]);