$(document).ready(function(){

// tab的tag
  $(".tag a").click(function(){
	  $(".tag a").removeClass("isactive");
	  $(this).addClass("isactive");
	  var tag = $(this).attr("href").replace("#", "");
	  $(".taskList>li").hide();
	  if(tag == "all"){
		$(".taskList>li").show();
	  }else{
		$('.taskList>li[data-tag*="'+tag+'"]').show();
	  }
  });
    
 // addTask
    $(".addBar").click(function(){
        $(".addTask").fadeIn(500);
        $(this).hide();
    });
    $(".cancelBtn").click(function(){
        $(".addTask").hide();
        $(".addBar").fadeIn(500);
    });
    



    
    
});
