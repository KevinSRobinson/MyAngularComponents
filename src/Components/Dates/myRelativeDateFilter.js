// /**
//  *
//  * @type {
//  * {bindings:
//  * {selected: string, items: string, fieldName: string, fieldLabel: string, categoryField: string}, controllerAs: string, controller: myCategorySelect.controller, template: string}}
//  */
// var myRelativeDateFilter = {
//     bindings: {
//         selected: "=",
//         items: "=",
//         fieldName: "@",
//         fieldLabel: "@",
//         dateField: "@"
//     },
//     controllerAs: "vm",
//     controller: function ($scope, $moment) {
//         "use strict";
//         console.log("myDisplayDateField");
//         var vm = this;
//         vm.dates = [];
//
//         vm.init = function () {
//             if (vm.fieldLabel == undefined) {
//                 vm.fieldLabel = "Dates";
//             }
//
//             if (vm.dateField == undefined) {
//                 vm.dateField = "Dates";
//             }
//         };
//
//         // watch for changes
//         $scope.$watch("vm.items", function () {
//
//             if (vm.items != undefined) {
//                 buildList();
//             }
//         });
//
//
//         var buildList = function () {
//
//             //create a temporary list for building the list
//             var catsList = [];
//
//
//             // loop through all the tags in the list
//             angular.forEach(vm.items, function (key, value) {
//
//                 // separate out tags
//                 var dates = getDates(key[vm.dateField]);
//
//                 // get today's date
//                 var today = $moment().format('LL');
//                 var startOfWeek  = moment().startOf('week').add(1, 'days');
//                 var endOfWeek    = moment().endOf('week');
//
//
//                 var thisWeekRange = moment.range(startOfWeek.format('LL'), endOfWeek.format('LL'));
//                 var thisMonthRange = moment.range(moment().startOf('month'), moment().endOf('month'));
//
//
//
//                 //add unique values to the temporary list
//                 angular.forEach(dates, function (key, value) {
//
//                     // convert the date to moment Format
//                     var momentDate = $moment(key[vm.dateField]);
//
//
//                     console.log("=============================");
//                     console.log(thisWeekRange.contains(momentDate));
//                     console.log("=============================");
//
//                     console.log('M = ' + momentDate);
//
//
//                     if (momentDate.format('LL') == today) {
//                         addDateRangeToList("Today");
//                     }
//
//                     if (thisWeekRange.contains(momentDate)) {
//                         addDateRangeToList("This Week");
//                     }
//
//                     if (thisMonthRange.contains(momentDate)) {
//                         addDateRangeToList("This Week");
//                     }
//
//
//
//                 });
//
//             });
//
//
//             // copy sorted list to the main category list
//             vm.cats = catsList.sort();
//
//             //add an All option to the first item in the list
//             vm.cats.unshift("All");
//
//             // set the default option to All
//             vm.selected = "All";
//         };
//
//         var addDateRangeToList = function (dateRange) {
//             if (vm.dates.indexOf(dateRange) == -1) {
//                 vm.dates.push(dateRange)
//             }
//         };
//
//
//         var isJson = function isJson(str) {
//             try {
//                 JSON.parse(str);
//             } catch (e) {
//                 return false;
//             }
//             return true;
//         };
//
//         var getDates = function (tags) {
//
//             if (isJson(tags)) {
//                 return angular.fromJson(tags);
//             }
//             else {
//                 return tags.split(",");
//             }
//
//         };
//
//
//         vm.init();
//
//     },
//     template: ["<div class='form-group'>",
//         "<label class='control-label' style='min-width: 110px; text-align: left' >{{vm.fieldLabel}}</label>",
//         "<select   class='form-control' ng-model='vm.selected'>",
//         "<option ng-repeat='category in vm.dates'   value='{{category}}' >{{category}}</option>",
//         "</select>",
//         "</div>"].join("")
// };
//
// myRelativeDateFilter.$inject = ["$scope", "$moment"];
//
// angular.module("myComponents").component("myRelativeDateFilter", myRelativeDateFilter);