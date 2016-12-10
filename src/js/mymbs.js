

$(function(){
	
	touch.on(".dengluzhuce", "tap", function() {
		window.location = "/register.html"
	})
	

	
	
	
	
	
})



	window.onload=function(){
	var user = cookieUtil.getCookieValue("userLogin");
	console.log(user)
//	alert(user)
			if(user != ""){
//				$(".dengluzhuce").css("background","yellow");	
				$(".dengluzhuce").html("");	
				$(".dengluzhuce").addClass("iconfont icon-wo left");	
				$(".name").html(user+"<br />"+"普通客户")
				$(".dizhi").html("地址管理>")
//				$(".putong").html("普通客户")
			}

}




















