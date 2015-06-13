angular.module('lab65.Controllers',
    [
        'ionic',
        'lab65.Services'
    ]
)

.controller('lab65.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };

        $scope.getListP = function() {

            $state.transitionTo('productList');

        };
})

.controller('lab65.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})
.controller('lab65.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        });

})
.controller('lab65.ListProductsController', function($scope,listsP) {

        $scope.listsProducts = listsP.products_list.query(function(data){

            console.log(data);
        });

});
