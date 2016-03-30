var tab_index = 0;
var menu_index = 0;

function tab_donw_line(index){
		//alert(index);
		var headerLineLeft = $('.header-line-left');
		switch(index){
		case 0:
			headerLineLeft.animate({left:'0%'},500);
			break;
		case 1:
			headerLineLeft.animate({left:'33.3%'},500);
			break;
		case 2:
			headerLineLeft.animate({left:'66.6%'},500);
			break;
	};
}
// tab下划线效果
// 鼠标点击tab时效果
$('.wh-header-tab').find('li').click(function(){
	 	tab_index = $(this).index();
	 	tab_donw_line(tab_index);
		$(this).addClass('text-color').siblings('li').removeClass('text-color');		
});

// $('.wh-header-tab').find('li').hover(function(){
// 	// tab鼠标移入时效果
// 	tab_donw_line($(this).index());
// },function(){
// 	//tab鼠标移出时效果
// 	tab_donw_line(tab_index);
// })


// 主内容侧边栏切换效果
$('.wh-list-button').click(function(){
        var isExpand=$(this).data('isExpand')==undefined?false:$(this).data('isExpand');
        if (isExpand){
        	$('.main-left').animate({marginLeft:'0px'}, 400)
            $(this).data('isExpand',false);
        }else{
            $('.main-left').animate({marginLeft:'-198px'}, 400)
            $(this).data('isExpand',true);
        }
})
// 侧边栏菜单效果
function menu_left_line(index){
		//alert(index);
		var menu_line_left = $('.menu-line-left');
		switch(index){
		case 0:
			 menu_line_left.animate({top:'0'},500);
			break;
		case 1:
			 menu_line_left.animate({top:'48'},500);
			break;
		case 2:
			 menu_line_left.animate({top:'96'},500);
			break;
		case 3:
			 menu_line_left.animate({top:'144'},500);
			break;
		case 4:
			 menu_line_left.animate({top:'192'},500);
			break;
		case 5:
			 menu_line_left.animate({top:'240'},500);
			break;
		case 5:
			 menu_line_left.animate({top:'288'},500);
			break;
		case 6:
			 menu_line_left.animate({top:'288'},500);
			break;
		case 7:
			 menu_line_left.animate({top:'336'},500);
			break;
	};
}

// 鼠标点击侧边栏时效果
$('.main-left').find('li').click(function(){
	 	menu_index = $(this).index();
		// $(this).addClass('text-color').siblings('li').removeClass('text-color');
		var active = $(this).attr('active');
		menu_left_line(menu_index);
		
});

// $('.main-left').find('a').hover(function(){
// 		// 鼠标移侧边栏入时效果
// 		menu_left_line($(this).parent().index());
// },function(){
// 		// 鼠标移出侧边栏时效果
// 		menu_left_line(menu_index);
// });


