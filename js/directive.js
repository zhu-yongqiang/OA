/**
* myApp.directive Module
*
* Description
*/
angular.module('myApp.directives', [])
.directive('dutyboardleft',['$q',function($q) {
	return {
		restrict: 'AE',
		templateUrl: 'tpl/duty/dutyboardleft.html',
		link: function($scope, iElm, iAttrs, controller) {

			function tooltipToggle() {
				var i = 0;
				$(".dutylog .up").click(function() {
					if(i%2 == 0) {
						$(".dutylog .tooltip").slideDown("slow");	
					}
					else {
						$(".dutylog .tooltip").slideUp("slow");
					}
					i++;
				})
			}
			// 手风琴卡片
			function hideInfo(clickTarget,animateTarget){
				$(clickTarget).click(function(){
					$(animateTarget).slideToggle("slow");
				})
			}

			$(".dutyrule .content").hide();
			$(".dutylog .tooltip").hide();
			hideInfo(".dateinfo .up",".detailinfo");
			hideInfo(".dutyrule .up",".dutyrule .content");
			tooltipToggle();	
		}
	}
}]);
