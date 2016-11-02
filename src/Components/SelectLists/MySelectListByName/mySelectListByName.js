var mySelectListByName = {
  bindings: {
    ngModel: "=",
    items: "=",
    fieldLabel: "@",
    fiedlName: "@"
  }
};

angular.module("myComponents").component("mySelectListByName", mySelectListByName);


