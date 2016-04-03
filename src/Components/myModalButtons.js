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
