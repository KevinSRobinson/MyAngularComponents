var tags = {
    controllerAs:'vm',
    controller: function() {
        var vm = this;
       
       vm.sampleTags = ['Red', 'Green'];
    },
    
    templateUrl: 'app/Tags/tagsTemplate.html'
};


angular.module('examples').component('tags', tags);
