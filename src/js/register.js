$(function() {

	touch.on(".fanhuimymbs", "tap", function() {
		window.location = "/mymbs.html"
	})


	
	var flag1 = false
	var flag2 = false
	var flag3 = false
	var phone = /^(13|14|15|18)[0-9]{9}$/;
	
	$(".phone").blur(function() {
		if(phone.test($(".phone").val())) {
			flag1 = true
			if(flag1) {
				$(".next").css("background", "red")

			} else {
				$(".next").css("background", "#aeaeae")
			}
			
		}

	})
	
	
	
	
	

	$(".next").on("click", function() {
		if($(".duihao").prop("checked")){
				flag2 = true
//				alert(2)
			}else{
				flag2 = false
			}

		if(flag1 && flag2) {
			var userName = $(".phone").val()
			cookieUtil.setCookie("userLogin",userName,30,"/")
			window.location = "/register2.html"
		}
	})

})