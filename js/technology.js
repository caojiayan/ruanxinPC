

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

//con6
$(function(){
  $('#c6Techcheck1').click(function(){
    if($('.c6Techtwo').is(':hidden')){
      $('.c6Techtwo').show();
      $('#c6Techcheck1').val('点击隐藏');
    }
    else{
      $('.c6Techtwo').hide();
      $('#c6Techcheck1').val('点击显示');
    }
  });
});

$(function(){
  $('#c6Techcheck2').click(function(){
    if($('.c6Techthree').is(':hidden')){
      $('.c6Techthree').show();
      $('#c6Techcheck2').val('点击隐藏');
    }
    else{
      $('.c6Techthree').hide();
      $('#c6Techcheck2').val('点击显示');
    }
  });
});

$(function(){
  $('#c6Techcheck3').click(function(){
    if($('.c6Techfour').is(':hidden')){
      $('.c6Techfour').show();
      $('#c6Techcheck3').val('点击隐藏');
    }
    else{
      $('.c6Techfour').hide();
      $('#c6Techcheck3').val('点击显示');
    }
  });
});

//服务人员新增
//遮盖层与点击显示与隐藏
$(function(){
	$(".c6TechpopClick").click(function(){
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6Techpopup").show();
	});
	$(".c6TechpopClose").click(function(){
		$("#c6Techpopup").hide();
		$(".maskingLayer").hide();
	});
});

//服务项目新增
//遮盖层
$(function(){
	$(".c6PropopClick").click(function(){
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6Projectpop").show();
	});
	$(".c6PropopClose").click(function(){
		$("#c6Projectpop").hide();
		$(".maskingLayer").hide();
	});
});