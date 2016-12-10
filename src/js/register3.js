$(function() {

	touch.on(".fanhuiregister2", "tap", function() {
		window.location = "/register2.html"
	})
	var str = ""
	var flag1 = false
	var flag2 = false
	var mima = /^[a-zA-Z0-9]{8,20}$/;
	$(".phone").blur(function() {
		if(mima.test($(".phone").val())) {
			flag1 = true
			if(flag1) {
				$(".next").css("background", "red")

			} else {
				$(".next").css("background", "#aeaeae")
			}
		}

	})

	$(".cuo").on("click", function() {
		$(".phone").val("")
		$(".next").css("background", "#aeaeae")
	})

	$(".kan").on("click", function() {
		flag2 = !flag2
		if(flag2) {
			$(".phone").attr("type", "text")
		} else {
			$(".phone").attr("type", "password")
		}

	})
	
	$(".next").on("click",function(){
		if(flag1){
//			var str = document.cookie
//			var arrcookie = str.split(";")
//			var arr = arrcookie.split("=")
//			alert(arr)
//			for(var i = 0; i < arrcookie.length; i++) {
//				var arr = arrcookie[1];
//				alert(arr)
//			}
			
			var userPass = $(".phone").val()
			cookieUtil.setCookie("userPass",userPass,30,"/")
			window.location = "/login.html"
		}
		
	})
	
	
	
	

})
























//register  checkbox  bug





















