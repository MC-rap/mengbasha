$(function() {

	touch.on(".fanhuiregister1", "tap", function() {
		window.location = "/register.html"
	})

	yanzhengma()
	var flag = false
	function yanzhengma() {
		var str = ""
		for(var i = 0; i < 4; i++) {
			str += parseInt(Math.random() * 10)
			$(".yanzhengma").html(str)
		}
	}

	touch.on(".yanzhengma", "tap", function() {
		yanzhengma()
	})
	
	$(".phone").blur(function() {
		if($(".phone").val() == $(".yanzhengma").html()){
			$(".next").css("background","red")
			flag = true
		}else{
			$(".next").css("background", "#aeaeae")
			flag = false
		}
	})
	
	touch.on(".next", "tap", function() {
		if(flag){
			window.location = "/register3.html"
		}
		
	})

})