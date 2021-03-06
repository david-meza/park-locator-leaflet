'use strict';

angular.module('parkLocator').controller('devicesCtrl', ['$scope', 'deviceService',
	function($scope, deviceService){

    $scope.isMobile = deviceService.isMobile;

    $scope.activeTab = deviceService.activeTab;

    $scope.showTab = function (tab) {
      return $scope.isMobile() && $scope.activeTab.name !== tab;
    };

}]);