/**
directive 主要用于存放模板中需要进行DOM操作的部分
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
}])
.directive('dutyboardright',['$q',function($q) {
	return {
		restrict: 'AE',
		templateUrl: 'tpl/duty/dutyboardright.html',
		link: function($scope, iElm, iAttrs, controller) {
			// 绘制值班情况
			new Morris.Donut(
			{
				element: 'myfirstchart',
				data: [
				  {value: 25, label: '请假' },
				  {value: 75, label: '值班'}
				],
				backgroundColor: '#fff',
				fontSize: '30px',
				labelColor: '#060',
				colors: [
				  '#ff6666',
				  '#21b69e'
				],
				formatter: function (x) { return x + "%"}
			}
			)

		}
	}
}])
.directive('rightpannelnav',['$q',function($q) {
	return {
		restrict: 'AE',
		template: '<div class="right_pannel_nav"><div class="right_menu"><ul><li class="active"><a href="#">值班看板</a></li><li><a href="#">值班表</a></li><li><a href="#">历史日志</a></li><ul></div></div>',
		link: function($scope, iElm, iAttrs, controller) {
			function menuActive(target) {
				$(target).click(function(e) {
					$(target).removeClass("active");
					$(e.currentTarget).addClass("active");
				});
			}

			menuActive(".right_menu li");
		}
	}
}])
// 一个问题，在ab之间，其具有几乎相同的link逻辑，怎么改才能使代码量减少，二者实现复用？
.directive('leftmenu',['$q',function($q) {
	return {
		restrict: 'AE',
		template: '<div class="left_menu"><div class="left_menu_avatar"><img src="img/avatar.jpg" alt=""></div><ul ><li class="active" ><a href="#" >值班</a></li><li><a href="#">汇报</a></li><li><a href="#">会议</a></li><li><a href="#">项目</a></li><li><a href="#">人事</a></li><li><a href="#">财务</a></li></ul></div>',
		link: function($scope, iElm, iAttrs, controller) {
			function menuActive(target) {
				$(target).click(function(e) {
					$(target).removeClass("active");
					$(e.currentTarget).addClass("active");
				});
			}
			menuActive(".left_menu li");
		}
	}
}])


