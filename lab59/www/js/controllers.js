'use strict';

angular.module('lab59.Controllers', [])

.controller('ListController', function($scope, $state) {

        $scope.changePage = function(){

            $state.go( 'view', { id: 4 } );

        }
})

.controller('ViewController', function($scope, $stateParams, $ionicHistory) {

        console.log( $stateParams.id );

        if ( parseInt( $stateParams.id )  === 1 ) {

            console.log( 'on id = 1' );

                        $scope.elements_ionic = '<div class="list">'+

                                      '<a class="item item-icon-left" href="#">'+
                                        '<i class="icon ion-email"></i>'+
                                        'Check mail'+
                                      '</a>'+
                                      '<a class="item item-icon-left item-icon-right" href="#">'+
                                        '<i class="icon ion-chatbubble-working"></i>'+
                                       'Call Ma'+
                                        '<i class="icon ion-ios-telephone-outline"></i>'+
                                      '</a>'+
                                      '<a class="item item-icon-left" href="#">'+
                                        '<i class="icon ion-mic-a"></i>'+
                                        'Record album'+
                                        '<span class="item-note">'+
                                          'Grammy'+
                                        '</span>'+
                                      '</a>'+
                                      '<a class="item item-icon-left" href="#">'+
                                        '<i class="icon ion-person-stalker"></i>'+
                                        'Friends'+
                                        '<span class="badge badge-assertive">0</span>'+
                                      '</a>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 2 ) {

            $scope.elements_ionic = '<div class="list">' +
                                        '<label class="item item-input item-select">' +
                                            '<div class="input-label">' +
                                                'Lightsaber' +
                                            '</div>' +
                                            '<select>' +
                                                '<option>Blue</option>' +
                                                '<option selected>Green</option>' +
                                                '<option>Red</option>' +
                                            '</select>' +
                                        '</label>' +
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 3 ) {

            $scope.elements_ionic = '<div class="list">' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">First Name</span>' +
                                        '<input type="text" placeholder="First Name">' +
                                    '</label>' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Last Name</span>' +
                                        '<input type="text" placeholder="Last Name">' +
                                    '</label>' +
                                    '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Email</span>' +
                                        '<input type="text" placeholder="Email">' +
                                    '</label>' +
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else {

            $scope.elements_ionic = '<div class="list">' +
                                      '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">First Name</span>' +
                                        '<input type="text" placeholder="First Name">' +
                                      '</label>' +
                                      '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Last Name</span>' +
                                        '<input type="text" placeholder="Last Name">' +
                                      '</label>' +
                                      '<label class="item item-input item-floating-label">' +
                                        '<span class="input-label">Email</span>' +
                                        '<input type="text" placeholder="Email">' +
                                      '</label>' +
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) ); //busca el id element y le hace el append

            list_element.append( $scope.elements_ionic );

        }


        $scope.goBack = function(){

            $ionicHistory.goBack();

        }
});