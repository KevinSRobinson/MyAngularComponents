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