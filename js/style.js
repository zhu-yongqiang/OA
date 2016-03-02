/**
简单的交互内容，主要是完成一些视觉上的功能
*/
window.onload = function() {
	menuActive(".left_menu li");
	// $(".dutyrule .content").hide();
	// $(".dutylog .tooltip").hide();
	menuActive(".right_menu li");
	// hideInfo(".dateinfo .up",".detailinfo");
	// hideInfo(".dutyrule .up",".dutyrule .content");
	// changenavMenu();
	// tooltipToggle();
}
// 导航栏的效果
function menuActive(target) {
	$(target).click(function(e) {
		$(target).removeClass("active");
		$(e.currentTarget).addClass("active");
	});
}
// function changenavMenu() {
// 	var i = 0;
// 	$(".dutyrule .up").click(function() {
// 		if(i%2 == 0) {
// 			$(".left_menu").addClass("left_menu_long");
// 		}
// 		else {
// 			$(".left_menu").removeClass("left_menu_long");
// 		}
// 		i++;
// 		// console.log(i);
// 	})
// }
// tooltip 滑动出现
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

new Morris.Donut(
{
	element: 'myfirstchart',
	data: [
	  {value: 25, label: '请假'},
	  {value: 75, label: '值班'}
	],
	backgroundColor: '#fff',
	labelColor: '#060',
	colors: [
	  '#ff6666',
	  '#21b69e'
	],
	formatter: function (x) { return x + "%"}
}
)
