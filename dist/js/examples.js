 var app = angular.module('examples', ['myComponents', 'ejangular']);


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
    templateUrl: 'app/Buttons/buttons.html'
};


angular.module('examples').component('buttons', buttons);

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
    templateUrl: 'app/CheckBoxes/checkBoxes.html'
};


angular.module('examples').component('checkBoxes', checkBoxes);

var comboBoxes = {
    controllerAs:'vm',
    controller:function(){
      var vm = this;
      
     vm.fakeItems = [{
         id: 1,
         Title: 'Test 1',
         Tags: 'Tag1, Tag2',
         Category: 'Category 1, Category 5',
         Types: 'Type 1, Type 5',
         Town: 'Town 1, Town 5',
         Dates: '28/7/2016'
     }, {
         id: 2,
         Title: 'Test 1',
         Tags: 'Tag3, Tag2',
         Category: 'Category 3, Category 2',
         Types: 'Type 2, Type4',
         Town: 'Town 1, Town 5',
         Dates: '28/7/2016'
     }, {
         id: 3,
         Title: 'Test 1',
         Tags: 'Tag4, Tag5',
         Category: 'Category 4, Category 2',
         Types: 'Type 11, Type 13',
         Town: 'Town 1, Town 5',
         Dates: '28/7/2016'
     }];


     vm.filterText = '';  
    },
    templateUrl:'app/ComboBoxes/comboBoxes.html'
};


angular.module('examples').component('comboBoxes', comboBoxes);
var dates = {
    controllerAs:'vm',
    controller: function() {
       var vm = this;
       vm.dateValue = '2/3/2013';
       
       vm.date = new Date();
       vm.defaultDate = new Date(1, 1, 0000);
    },
    templateUrl: 'app/Dates/dates.html'
};


angular.module('examples').component('dates', dates);

var fields = {
    controllerAs:'vm',
    controller: function() {
        var vm = this;
       
       vm.firstName ='Kevin'
       
        vm.sampleText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquet elit. Morbi at ligula nulla. Etiam dolor lorem, placerat id laoreet quis, interdum nec ante. Ut tempus dictum suscipit. Ut auctor turpis maximus diam porta, at tincidunt diam posuere. In non tristique lacus, pellentesque cursus ante. Nunc hendrerit pellentesque ex, eu pulvinar dui porttitor accumsan. Quisque pretium congue diam, at lacinia orci. Nulla consectetur urna sed nulla efficitur maximus. Nunc et massa sit amet ante mattis tristique fringilla eget neque. Mauris quis magna neque.';
   
    },
    templateUrl: 'app/Fields/fields.html'
};


angular.module('examples').component('fields', fields);

var panels = {
    controller: function($location) {
        var vm = this;
        vm.add = function() {
            alert('Add Clicked');
        };

        vm.edit = function() {
            alert('Edit Clicked');
        };
    },
    
    templateUrl: 'app/Panels/panels.html'
};


angular.module('examples').component('panels', panels);

var selectLists = {
    controllerAs: 'vm',
    controller: function() {
        var vm = this;

        vm.fakeItems = [{
            Id: 1,
            Name : 'Kevin'
        }]

    },
    templateUrl: 'app/SelectLists/selectLists.html'
};


angular.module('examples').component('selectLists', selectLists);

var tags = {
    controllerAs:'vm',
    controller: function() {
        var vm = this;
       
       vm.sampleTags = ['Red', 'Green'];
    },
    
    templateUrl: 'app/Tags/tagsTemplate.html'
};


angular.module('examples').component('tags', tags);

angular.module('examples').run(['$templateCache', function($templateCache) {$templateCache.put('app/Buttons/buttons.html','<h1>Buttons</h1><hr><blockquote><pre>\r\n       <code>\r\n           &lt;my-create-button&gt;&lt;/my-create-button&gt;\r\n        </code>\r\n    </pre></blockquote><my-create-button></my-create-button><my-delete-button></my-delete-button><my-edit-button></my-edit-button>');
$templateCache.put('app/CheckBoxes/checkBoxes.html','<h1>Check Boxes</h1><hr><my-checkbox-field field-label="Question 1" checked=false></my-checkbox-field>');
$templateCache.put('app/ComboBoxes/comboBoxes.html','<h1>Combo Boxes</h1><hr><div class=well><h4>Category Select</h4><strong>Items :</strong> {{vm.fakeItems}}<br><h4>Using Default</h4><strong>Selected Category:</strong>{{ selectedCategory }}<br><my-category-select items=vm.fakeItems selected=selectedCategory></my-category-select><hr><h4>Specify "Types" Field</h4><strong>Selected Type:</strong>{{ selectedType }}<br><my-category-select items=vm.fakeItems selected=selectedType category-field=Types field-label=Type></my-category-select><hr><h4>Specify "Town" Field</h4><strong>Selected Town:</strong>{{ selectedTown }}<br><my-category-select items=vm.fakeItems selected=selectedTown category-field=Town field-label=Town></my-category-select></div>');
$templateCache.put('app/Dates/dates.html','<h1>Dates 1</h1><hr><my-date-field field-label="Departure Date" ng-model=vm.date></my-date-field>');
$templateCache.put('app/Fields/fields.html','<h1>Fields</h1><hr><h5>Display Field</h5><my-display-field field-label="First Name" field-name=FirstName ng-model=vm.firstName></my-display-field><my-display-textarea field-label=Description field-name=Description ng-model=vm.sampleText></my-display-textarea><hr><h5>Text Field</h5><my-text-field field-label="First Name" field-name=FirstName ng-model=vm.firstName></my-text-field><my-textarea-field field-label="First Name" field-name=FirstName ng-model=vm.sampleText></my-textarea-field>');
$templateCache.put('app/Panels/panels.html','<h1>Panels</h1><hr>sdsdfsd<my-info-panel info=sdfsdfsdfsdfsdf></my-info-panel><my-panel title="Text Field" style=success show-edit-button=true show-add-button=true show-footer=true footer-right-label="Footer Right label" footer-left-label="Footer Left label" small-heading=true>Panel with tight heading and no Icon</my-panel><h3>My-more-less-panel</h3><my-more-less-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia "</my-more-less-panel>');
$templateCache.put('app/SelectLists/selectLists.html','<h1>Select Lists</h1><hr>{{vm.fakeItems}}<my-select-list items=vm.fakeItems field-label="Select Contact" field-name=contact></my-select-list>');
$templateCache.put('app/Status/status.html','<h1>Status</h1><hr>');
$templateCache.put('app/Tags/tagsTemplate.html','<h1>Tags2</h1><hr><my-tags-multi-select field-label=Tags ng-model=vm.selected tags=vm.sampleTag></my-tags-multi-select>');}]);