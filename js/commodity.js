//仅产品、仅商品按钮
//$(function(){
//	$(".c1mChanger li a").click(function(){
//		$(this).parent().css("background","#009843")
//	});
//});

//互补类目中删除项
$(function(){
	$(".c1mTableul>li>a").click(function(){
		$(this).parent().remove();
	});
});
//商品别称中删除项
$(function(){
	$(".c2navList>li>a").click(function(){
		$(this).parent().remove();
	});
});

//规格里删除项
$(function(){
	$(".c4Ul>li>a").click(function(){
		$(this).parent().remove();
	});
});
