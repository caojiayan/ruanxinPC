

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

//服务人员
//遮盖层
$(function(){
	$(".c6TechpopClick").click(function(){   //服务人员新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6TechpopupN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6TechpopupN").show();
	});
	$(".c6TechpopWrite").click(function(){  //服务人员修改
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
		$("#c6Techpopup").hide(); //点击关闭
		$("#c6TechpopupN").hide();
		$(".maskingLayer").hide();
	});
	$(".c6TechpopHold").click(function(){
		$("#c6Techpopup").hide(); //点击关闭
		$("#c6TechpopupN").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});


//服务项目
//遮盖层
$(function(){
	$(".c6PWriClick").click(function(){   //服务项目新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6ProWriteN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6ProWriteN").show();
	});
	$(".c6ProteW").click(function(){   //服务项目修改
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6ProWrite").show();
	});
	$(".c6ProWriClose").click(function(){
		$("#c6ProWriteN").hide();
		$("#c6ProWrite").hide();
		$(".maskingLayer").hide();
	});
	$(".c6ProWriHold").click(function(){
		$("#c6ProWriteN").hide();
		$("#c6ProWrite").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});

//服务资源
$(function(){
	$(".c6PresClick").click(function(){   //服务资源新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6PresourceN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6PresourceN").show();
	});
	$(".c6resourceW").click(function(){   //服务资源修改
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6Presource").show();
	});
	$(".c6PresClose").click(function(){
		$("#c6PresourceN").hide();
		$("#c6Presource").hide();
		$(".maskingLayer").hide();
	});
	$(".c6PresHold").click(function(){
		$("#c6PresourceN").hide();
		$("#c6Presource").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});
//上传图片部分
$(function(){
    $('.imgRemove').click(function(){   //点击删除键，删除该图片
        $(this).parent().remove();  //移除掉他的父级li
    });
});


//服务设置中点击全选
//$(function(){
//  $(".c6Choice input").click(function(){
//      var id = $(this).attr("id");  //获取当前id
//      $("#id .deletebtn").click(function(){
//          $(".table_box tr").each(function(){
//              if($(this).find("input").attr("checked")&&$(this).index()!=0){
//                  $(this).remove();
//              }
//          });
//      });
//      $("#allcheckbox").click(function(){
//          if($(this).attr("checked")){
//              $(".table_box td input").attr("checked","checked");
//          }else{
//              $(".table_box td input").attr("checked","")
//          }
//      });
//      $(".table_box input").not("#allcheckbox").click(function(){
//          $(".table_box input").not("#allcheckbox").each(function(){
//              if($(".table_box input[type='checkbox']:checked").not("#allcheckbox").length==$(".table_box tr").not("#titletr").length){
//                  $("#allcheckbox").attr("checked","checked");
//              }else{
//                  $("#allcheckbox").attr("checked","");
//              }
//          });
//      });
//  });
//});


//$(function(){
//  $(".c6Choice .deletebtn").click(function(){
//      $(".table_box tr").each(function(){
//          if($(this).find("input").attr("checked")&&$(this).index()!=0){
//              $(this).remove();
//          }
//      });
//  });
//  $("#allcheckbox").click(function(){
//      if($(this).attr("checked")){
//          $(".table_box td input").attr("checked","checked");
//      }else{
//          $(".table_box td input").attr("checked","")
//      }
//  });
//  $(".table_box input").not("#allcheckbox").click(function(){
//      $(".table_box input").not("#allcheckbox").each(function(){
//          if($(".table_box input[type='checkbox']:checked").not("#allcheckbox").length==$(".table_box tr").not("#titletr").length){
//              $("#allcheckbox").attr("checked","checked");
//          }else{
//              $("#allcheckbox").attr("checked","");
//              }
//      })
//  })

$(".deletebtn").click(function(){
$(".table_box tr").each(function(){
if($(this).find("input").attr("checked")&&$(this).index()!=0){
$(this).remove();
}
})
})
$("#allcheckbox").click(function(){
if($(this).attr("checked")){
$(".table_box td input").attr("checked","checked");
}else{
$(".table_box td input").attr("checked","")
}
})

$(".table_box input").not("#allcheckbox").click(function(){
$(".table_box input").not("#allcheckbox").each(function(){
if($(".table_box input[type='checkbox']:checked").not("#allcheckbox").length==$(".table_box tr").not("#titletr").length){
$("#allcheckbox").attr("checked","checked");
}else{
$("#allcheckbox").attr("checked","");
}
})

})