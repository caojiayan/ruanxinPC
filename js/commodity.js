
//互补类目中删除项
$(function(){
	$(".c1mTableul>li>a").click(function(){
		$(this).parent().remove();
	});
});

//包装配置中的附增内容删除项
$(function(){
	$(".ct51UList>li>a").click(function(){
		$(this).parent().remove();
	});
});

//商品SKU
$(function(){
	var bh = $(".cv21").height();  //获取商品SKU列表的高度
    $(".cv21empty").css({  //设置一个空的cv21empty的位置的高度=商品SKU列表的高度+10px
        height:bh+10,
        display:"block"
    });
//  $(".cv21Img img").hover(function(){
//      $(this).animate({ 
//      width: "50%",
//      height: "50%"
//      }, 1000 );
//      $(this).css("z-index","100")
//  });
//  var bw = $(".cv21").width();
//	$(".cv21addC").click(function(){
//		var bw = bw+150;
//		alert("bw");
//		$(".cv21Ul1").append("<li><input type="text" class="li120px" value="" onfocus="javascript:if(this.value=='')this.value='';"/><a href="#">确定</a></li>"); 
//	});
});