
var cookieUtil={
    setCookie:function (name,value,days){
        var date=new Date();
        date.setDate(date.getDate()+days);
        document.cookie=name+"="+encodeURIComponent(value)+"; path=/;expires="+date;
    },
    
    
    
//  document.cookie=phone1+"="+encodeURIComponent(value)+"; path=/; expires="+d.toGMTString();
    getCookieValue: function (name){
            var cookieValue="";
            
            var strCookie=document.cookie;
            var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
                var item=arrCookie[i].split("=");
                if(item[0]==name){
                	
                    cookieValue=item[1];
                }
            }
             
            return decodeURIComponent(cookieValue);
    },
    getCookieName: function (name){
            
            var cookieName ="";
            var strCookie=document.cookie;
            var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
                var item=arrCookie[i].split("=");
                if(item[0]==name){
                	cookieName=item[0];
                    
                }
            }
             return decodeURIComponent(cookieName);
            
    },
    removeCookie:function(name){
        this.setCookie(name,"",-1);
    }
}
