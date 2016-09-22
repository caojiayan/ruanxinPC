
//所有下拉框
$(function(){
				//当列表项被点击时，把列表项的值放在输入框里面，
				$(".dropdown").delegate("li", "click", function(e){
					var v = $(this).attr("data-value"),
						drop = $(this).closest(".dropdown");
					drop.attr("data-value", v);
					drop.find(".editor").val(v);
					$(this).parent().hide();
					e.stopPropagation();
				}).delegate(".trigger", "click", function(e){    //当下拉按钮被点击时，显示数据列表
					$(this).closest(".dropdown").find("ul").show();
					e.stopPropagation();  //阻止冒泡，因为冒泡到 document 的时候，会隐藏列表
				}).delegate(".search input", "click", function(e){
					e.stopPropagation(); 
				}).delegate(".search input", "keyup", function(e){    //当检测到列表中的输入框的时候，启动过滤，不满足的项隐藏
					var v = $.trim(this.value), list = $(this).closest("ul").children("li");
					if(v == "") {    //特殊情况，过滤输入框中没有值的时候迭代所有的列表项并显示它们
						list.each(function(){
							if(this.className.indexOf("search") != -1) {return;}//不考虑过滤输入框所在的列表项
							$(this).text(this.innerText || this.textContent).show();
						});
					} else {
						list.each(function(){   //迭代列表，
							if(this.className.indexOf("search") != -1) {return;}  //不考虑过滤输入框所在的列表项
							var lv = $(this).text();   //列表的文本
							if(lv.indexOf(v) === -1) {   //不匹配过滤文本，就隐藏
								$(this).hide();
							} else {                 //匹配，把匹配的文本替换会含有标记的文本（红色）
								$(this).html(lv.replace(v, '<span class="hot">'+v+'</span>')).show();
							}
						});
					}
					
				});
				
				$(this).click(function(){   //当数据列表在显示时，如果点击了页面其它区域，则隐藏列表
					$(".dropdown ul:visible").hide();   
				});
				//加载数据，数据列表中的每一项是一个列表，为了模拟select，每个列表项目还包括一个自定义的属性 data-value,用于保存此列表项的值
				$("#load").click(function(){
					var p = $(".dropdown ul");
					var fragment = document.createDocumentFragment(), li;  //临时容器，为了避免多次添加引起页面高频率重绘
					for(var i=1, len=30;i<len;i++) {
						li = document.createElement("li");
						li.setAttribute("data-value", i);
						li.innerHTML = i;
						fragment.appendChild(li);
						//$('<li data-value="' + i + '">' + i + '</li>').appendTo(fragment);
					}
					p.append(fragment);  //将临时容器添加到无序列表里面，一次添加效率高
				});
			});
//当点击到某个下拉框时，z-index值最大
//$(document).ready(function(){
//	$(".dropdown").click(function(){
//		$(".dropdown:hover").css("z-index","100000")
//	});
//  });


//con1中类目选择：下拉框的值追加到cs3left后面
$(document).ready(function(){
	$(".c1Proinput1").click(function(){
		var cx1=$(".cs2one").val();
		var cx2=$(".cs2two").val(); 
		var cx3=$(".cs2three").val();
		$('.cs3left').html('');
		$(".cs3left").append(cx1+">"+cx2+">"+cx3);//将下拉框的值追加到cs3left后面
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

//con3中交易类型选择

function aCheck1(){ 
document.getElementById("cx11").style.display="block"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function bCheck2(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="block";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function cCheck3(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="block";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function dCheck4(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="block";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function eCheck5(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="block";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function fCheck6(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="block";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function gCheck7(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="block";
document.getElementById("cx18").style.display="none";
}
function hCheck8(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="block";
}

//con4中点击删除当列
function delTableRow(n){
       n.parentNode.removeChild(n); 
    }

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



