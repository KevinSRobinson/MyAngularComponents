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

	__webpack_require__(12);
	__webpack_require__(3);


	__webpack_require__(4);


	__webpack_require__(5);
	__webpack_require__(6);


	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);






			
			

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module("myComponents", []);




/***/ },
/* 2 */
/***/ function(module, exports) {

	var myTextField = {
	  bindings: {
	    fieldLabel: "@",
	    fieldName: "@",
	    ngModel: "="
	  },
	  controller: function () {
	    console.log(this);
	  },
	  template: ["<div class='form-group'>",
	              " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
	              " <input type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel'",
	            "</div>"].join("")
	};


	angular.module("myComponents").component("myTextField", myTextField);


/***/ },
/* 3 */
/***/ function(module, exports) {

	var myDispalyTextareaField = {
	   bindings: {
	        fieldLabel: '@',
	        ngModel: '='
	    },
	    template: [
	        "<strong>{{$ctrl.fieldLabel}}</strong>",
	        "{{$ctrl.ngModel}}"].join("")
	};


	angular.module("myComponents").component("myDisplayTextareaField", myDispalyTextareaField);


/***/ },
/* 4 */
/***/ function(module, exports) {

	var myDateField = {
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
	    " name='{{fieldName}}' id='{{fieldName}}",
	    " is-open='$ctrl.opened' ",
	    " uib-datepicker-popup='{{$ctrl.format}}' ",
	    " datepicker-options='$ctrl.dateOptions' ",
	    " ng-model='$ctrl.ngModel' />",
	    "<span class='input-group-btn'>",
	    "<button type='button' class='btn btn-default' ng-click='$ctrl.open()'><i class='glyphicon glyphicon-calendar'></i></button>",
	    " </span>",
	    "</div>"].join(""),
	  controller: function () {
	    this.opened = false;

	    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	    this.format = this.formats[0];

	    this.dateOptions = {
	      formatYear: 'yy',
	      startingDay: 1
	    };

	    this.open = function () {
	      this.opened = true;
	    };
	  }
	};


	angular.module('myComponents').component('myComponents', myDateField);



/***/ },
/* 5 */
/***/ function(module, exports) {

	var myCheckboxField = {
	  bindings: {
	    ngModel: "=",
	    fieldLabel: "@",
	    icon: "@"
	  },
	  template: ["<div class='row'>",
	                "<div class='col-md-4' style='margin-top: 10px'>",
	                    "<input type='checkbox' ng-model='$ctrl.ngModel'></checkbox>",
	                  "</div>",
	                   "<div class='col-md-8' style='margin-top: 10px'>",
	                    "<i class='fa {{$ctrl.icon}}'></i>{{$ctrl.fieldLabel}}",
	                "</div>",
	             "</div>"].join("")
	};

	angular.module("myComponents").component("myCheckboxField", myCheckboxField);


/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	var myDisplayField = {
	    bindings: {
	        fieldLabel: '@',
	        ngModel: '='
	    },
	    template: ["<div class='row'>",
	                    "<div class='col-sm-6'>",
	                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
	                    "</div>",
	                    "<div class='col-sm-6'>",
	                         "{{$ctrl.ngModel}}",
	                    "</div>",
	                 "</div>"].join("")
	};

	var app = angular.module('myComponents').component("myDisplayField", myDisplayField);

/***/ },
/* 8 */
/***/ function(module, exports) {

	var modalButtons = {

	    bindings: {
	        save: "&save",
	        close: "&close",
	        savetext: "@",
	        hidesave: "@",
	    },
	    template: ["<div class='modal-footer'>",
	        "<span><button type='submit' id='save' class='btn btn-primary btn-large pull-left'",
	        " ng-click='$ctrl.save()'>{{$ctrl.savetext}}</button>",
	        "<button type='button'  class='btn btn-default pull-left'",
	        "ng-click='$ctrl.close()'>Close</button>",
	        "</span>",
	        "</div>"].join("")
	};

	var app = angular.module("myComponents").component("modalButtons", modalButtons);


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports) {

	var mySpinner= {
	    bindings: {
	        ngModel: "="
	    },
	    template: "<i ng-show='$ctrl.ngModel'  class='fa fa-circle-o-notch fa-spin fa-5x'></i>"
	};


	angular.module("myComponents").component("mySpinner", mySpinner);





/***/ },
/* 12 */
/***/ function(module, exports) {

	var myTextareaField = {
	  bindings: {
	    fieldLabel: "@",
	    fieldName: "@",
	    ngModel: "="
	  },
	  template: ["<div class='form-group'>",
	              " <label class='control-label' style='min-width: 110px; text-align: left'>{{$ctrl.fieldLabel}}</label>",
	              " <textarea type='text'  class='form-control'  id='{{$ctrl.fieldName}}' ng-model='$ctrl.ngModel'",
	            "</div>"].join("")
	};


	angular.module("myComponents").component("myTextareaField", myTextareaField);


/***/ }
/******/ ]);