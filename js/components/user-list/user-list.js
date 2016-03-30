angular.module("userList", [])
.component("userList", {
  templateUrl: "./js/components/user-list/user-list.html",
  controller: function($http){
    var vm = this;

    $http.get("http://jsonplaceholder.typicode.com/users")
      .then(function(data){
        console.log(data);
        vm.usuarios = data.data;
      })
  }
});
