$(document).ready(function(){
    var d = new Date();
    n = d.getMonth() +1;
    
    function setBG(url){
        $("#pics").css("background-image", "url(\"img/"+url+"\"");
    }

    if(n >= 11 && n < 13)
    {
        setBG("christmas.jpg");
    }
    else if(n == 10)
    {
        setBG("spooky.jpg");
    }
    else if(n == 1)
    {
        setBG("newyear.jpg");
    }
    else if(n == 4)
    {
        setBG("eastern.jpg");
    }
    else if(n >= 6 && n <= 8){
        setBG("summer.jpg");
    }
    else{
        setBG("default.gif");
    }
});
