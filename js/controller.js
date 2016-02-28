/**
controller.js 定义控制器的部分
*/
angular.module('myApp.controller', [])
.controller('consoleleftCtrl', ['$scope','$timeout', function($scope,$timeout) {
	// 获取当前时刻
	var updateClock = function() {
		$scope.today = new Date();
		$timeout(function() {
			updateClock();
		},1000);
	}
	updateClock();
	// 班次的判断
	var updatePeriod = function() {
		var hours = $scope.today.getHours();
		$scope.period = "";
		if(hours>=5&&hours<=12){
			$scope.period = "早";
		}
		else if(hours>=12&&hours<=19) {
			$scope.period = "中";
		}
		else {
			$scope.period = "晚";
		}
	}
	updatePeriod();
}])