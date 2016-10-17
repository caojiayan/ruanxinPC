
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
$(document).ready(function(argument) {
		
        var container = $("#table-container"),
            ltTable = container.find(".table-lt"),
            topTable = container.find(".table-top"),
            leftTable = container.find(".table-left"),
            rightTable = container.find(".table-right"),
  
            containerWidth = 0,
            containerHeight =0,
  
            ltTableWidth = 0,
            ltTableHeight = 0,
  
            widthJson = {},
  
            timerLT = null;
  
        ltTableWidth = ltTable.width();
        ltTable.width(ltTableWidth);
        topTable.css("marginLeft",ltTableWidth);
        leftTable.width(ltTableWidth);
        rightTable.css("marginLeft",ltTableWidth);
        ltTableHeight = ltTable.height();
        leftTable.css("marginTop",ltTableHeight+"px");
        rightTable.css("marginTop",ltTableHeight-35+"px");
  
        containerHeight = container.height();
        containerWidth = container.width();
        topTable.width((containerWidth - ltTableWidth  - (container.innerWidth() - container[0].clientWidth)));
        leftTable.height(containerHeight - ltTableHeight - (container.innerHeight() - container[0].clientHeight));
  
        // figure out the width of each DIV in TD  --start
        function setDivWidth(obj){
          $(obj).find("div").each(function(index){
            if(!widthJson[index]){
              widthJson[index] = 0;
            }
            if(widthJson[index]<$(this).width()) {
              widthJson[index] = $(this).width();
            }
          });
        }
        topTable.find("tr").each(function(){
          setDivWidth(this);
        });
        rightTable.find("tr").each(function(){
          setDivWidth(this);
        });
  
        topTable.find("tr:first div").each(function(index){
          $(this).width(widthJson[index]+10);
        });
        rightTable.find("tr:first div").each(function(index){
          $(this).width(widthJson[index]+10);
        });
        // figure out the width of each DIV in TD  --end
  
        container.scroll(function(){
          var currentScrollTop = $(this).scrollTop(),
              currentScrollLeft = $(this).scrollLeft();
          topTable.find(".table-mask").css("left", -currentScrollLeft+"px");
          leftTable.find(".table-mask").css("top", -currentScrollTop+"px");
  
        });
  
        $(document).scroll(function(){
          var currentScrollTop = $(this).scrollTop(),
              currentScrollLeft = $(this).scrollLeft();
          ltTable.css("marginTop", -currentScrollTop+"px");
          ltTable.css("marginLeft", -currentScrollLeft+"px");
          topTable.css("marginTop", -currentScrollTop+"px");
          topTable.css("marginLeft", ltTableWidth - currentScrollLeft+"px");
          leftTable.css("marginTop", ltTableHeight - currentScrollTop+"px");
          leftTable.css("marginLeft", -currentScrollLeft+"px");
  
        });
  
        // for IE, when window's scrollbar is moved, keep ltTable,leftTable,topTable in the correct position
        $(window).resize(function(){
          $(document).scroll();
        });
  
        //reset the width of topTable and the height of leftTable when container's size is changed, if container's size is fixed, you can skip the code below.
        timerLT = setInterval(function(){
          if(containerWidth != container.width() || containerHeight != container.height()){
            topTable.width(container.width() - ltTableWidth - (container.innerWidth() - container[0].clientWidth));
            leftTable.height(container.height() - ltTableHeight - (container.innerHeight() - container[0].clientHeight));
  
            containerWidth = container.width();
            containerHeight = container.height();
  
            container.scroll();// for IE
              
          };
                     
        },0);
  
      });
      
//商品SKU添加列
$(function(){
	$("#cv21addC").click(function(){   //在列表最右边追加内容
		$(".tableRt").append("<td><div><input type='text' value=''/><img src='img/img6.png' align='center'><img src='img/img5.png' align='center' style='display: none;'><a href='#' id='cv21addC'><img src='img/addGS.png' align='center'></a></div></td>");
        $(".table-rFilter").append("<td><div><input type='text' value=''/><a href='#'>确定</a></div></td>");
        $(".table-rList").append("<td><div></div></td>");
        $("#cv21addC").html("");
    });
    $(".field").change(function(){     //输入框完成之后转换图片
        $(".tableRtAdd img").toggle();
    });
    $(".table-rL1").click(function(){
        $(".table-rLone").val($(this).text()); //修改库存
    });
    $(".table-rLa").click(function(){//输入框完成之后转换图片
    	var rLa=$(".table-rLone").val();
        $(".table-rL1").text(rLa);
    });
    $(".table-rL2").click(function(){
        $(".table-rLtwo").val($(this).text());  //修改起购
    });
    $(".table-rL3").click(function(){
        $(".table-rLthree").val($(this).text());  //修改一口价
    });
    $(".table-rL4").click(function(){
        $(".table-rLfour").val($(this).text());  //修改老客折上折
    });
});
