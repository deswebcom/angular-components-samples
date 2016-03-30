angular.module("cuentaClic", [])
.controller("cuentaClicController", function(){
  var vm = this;
  vm.clics = 0;

  vm.incrementa = function() {
    vm.clics ++;
  }
})
.component("cuentaClic", {
  templateUrl: "./js/components/cuenta-clic/cuenta-clic.html",
  controller: "cuentaClicController"
});
