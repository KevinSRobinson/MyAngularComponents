var fields = {
    controllerAs: 'vm',
    controller: function() {
        var vm = this;

        vm.firstName = 'Kevin';

        vm.sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ' + 
                        'aliquet elit. Morbi at ligula nulla. Etiam dolor lorem, placerat id ' +
                        'laoreet quis, interdum nec ante. Ut tempus dictum suscipit. ' +
                        ' Ut auctor turpis maximus diam porta, at tincidunt diam posuere. ' +
                        ' In non tristique lacus, pellentesque cursus ante. Nunc hendrerit ' + 
                        ' pellentesque ex, eu pulvinar dui porttitor accumsan';

    },
    templateUrl: 'app/Fields/fields.html'
};

angular.module('examples').component('fields', fields);