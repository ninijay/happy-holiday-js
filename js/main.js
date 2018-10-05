$(document).ready(function(){
    var d = new Date();
    n = d.getMonth() +1;
    
    function setBG(url){
        $("#pics").css("background-image", "url(\"img/"+url+"\"");
    }

    if(n >= 11)
    {
        setBG("christmas.jpg");
    }
    if(n == 10)
    {
        setBG("spooky.jpg");
    }
    if(n == 1)
    {
        setBG("newyear.jpg");
    }
    if(n == 4)
    {
        setBG("eastern.jpg");
    }
    if(n >= 6 && n <= 8){
        setBG("summer.jpg");
    }
});
