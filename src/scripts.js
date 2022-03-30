$(".card").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
  })
  
$(".card").hover(function(){$(this).addClass("animated");})