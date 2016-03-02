/**
controller.js 定义控制器的部分
*/
angular.module('myApp.controllers', ['ngAnimate'])
.controller('consoleleftCtrl', ['$scope','$timeout','$http', function($scope,$timeout,$http) {
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
	// 得到下次值班的信息
	var getNextTurn = function() {
		$http({
			method: 'GET',
			url:"data/nextturn.json"
		}).success(function(data,status,headers,config){
			$scope.nextturn = data;
		}).error(function(data,status,headers,config){
			$scope.nextturn = {
				next:"加载出了点问题呦...",
				number: "反正不是110",
				qq: "刷新页面吧"
			}
		});
	}
	getNextTurn();
	

}])