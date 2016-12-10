
$(function(){
	
	
	touch.on(".new", "tap", function() {
		window.location = "/register.html"
	})
	
	var userName = cookieUtil.getCookieValue("userLogin")
	var userPass = cookieUtil.getCookieValue("userPass")
	$(".login").on("click",function(){
		if($(".phone").val() == userName && $(".mima").val() == userPass){
			window.location = "/mymbs.html"
		}
	})
	
	$(".wangmima").on("click",function(){
		if($(".phone").val() == userName){
			alert("您的密码是"+userPass)
		}
	})


	var phone = /^(13|14|15|18)[0-9]{9}$/;
	$(".phone").blur(function() {
		if(phone.test($(".phone").val())) {
			flag1 = true
			if(flag1) {
				$(".login").css("background", "red")

			} else {
				$(".login").css("background", "#aeaeae")
			}
			
		}

	})

	
})


















