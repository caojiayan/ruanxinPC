


//con1中类目选择新增
$(document).ready(function(){
	$("#c1btn").click(function(){
		var cx1=$(".cs2one option").val();
		var cx2=$(".cs2two option").val(); 
		var cx3=$(".cs2three option").val(); 
		$(".cs3left").append(cx1+">"+cx2+">"+cx3);
	});
});

//con2中删除服务项目
$(document).ready(function(){
	$(".c2navli1").click(function(){
		$(".c2navli1").hide();
	});
});
$(document).ready(function(){
	$(".c2navli2").click(function(){
		$(".c2navli2").hide();
	});
});
$(document).ready(function(){
	$(".c2navli3").click(function(){
		$(".c2navli3").hide();
	});
});


//con6中的服务资源新增
function msgbox(n){
            document.getElementById('inputbox').style.display=n?'block':'none';     /* 点击按钮打开/关闭 对话框 */
    }

//con7中新增商品属性
function msbox(n){
            document.getElementById('inputbox1').style.display=n?'block':'none';     /* 点击按钮打开/关闭 对话框 */
    }


//con7中商家补充属性中删除项
$(document).ready(function(){
	$(".c7li1").click(function(){
		$(".c7li1").hide();
	});
});
$(document).ready(function(){
	$(".c7li2").click(function(){
		$(".c7li2").hide();
	});
});
$(document).ready(function(){
	$(".c7li3").click(function(){
		$(".c7li3").hide();
	});
});
$(document).ready(function(){
	$(".c7li4").click(function(){
		$(".c7li4").hide();
	});
});

//con7服务内容中的textarea
 $(function(){
    $("#c7textarea").keyup(function(){
        var len = $(this).val().length;
        if(len > 99){
            $(this).val($(this).val().substring(0,100));
        }
        var num = 100 - len;
        $("#word").text(num);
    });
 });



//con8点击上传图片
function fileSelect() {
        document.getElementById("fileToUpload").click();
   }
    function fileSelected() {
      // 文件选择后触发次函数
    }



