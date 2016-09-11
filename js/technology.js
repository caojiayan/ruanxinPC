//con1中类目选择新增
$(document).ready(function(){
	$("#c1techbtn").click(function(){
		var cx1=$(".cs21technology option").val();
		var cx2=$(".cs22technology option").val(); 
		var cx3=$(".cs23technology option").val(); 
		$(".cs3left").append(cx1+">"+cx2+">"+cx3);
	});
});


//con4中删除项目
$(document).ready(function(){
	$(".c4deltech1").click(function(){
		$(".c4deltech1").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech2").click(function(){
		$(".c4deltech2").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech3").click(function(){
		$(".c4deltech3").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech4").click(function(){
		$(".c4deltech4").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech5").click(function(){
		$(".c4deltech5").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech6").click(function(){
		$(".c4deltech6").hide();
	});
});

$(document).ready(function(){
	$(".c4deltech7").click(function(){
		$(".c4deltech7").hide();
	});
});

