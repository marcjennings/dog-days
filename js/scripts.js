/* Document ready starts here */
$(document).ready( function(){

  /* navbar menu collapse */
  $(".navbar-nav li a").click(function(event) {
  $(".navbar-collapse").collapse('hide');
  });
  /* end navbar menu collapse */

  /* submit button */
  $("#button-submit").on("click",function(){
    console.log("clicked");
    
    var comment = $("#message-box").val();
    console.log(comment);
    return false;
  });
  /* end submit button */
  
  /* character counter */
  $("#message-box").on("keyup", function(){
    console.log("key up event occurred on message box");

    var comment = $(this).val();
    var numOfChars = comment.length;
    var $character_counter = $("#character-counter");

    $character_counter.html(numOfChars);

    if (numOfChars > 50) {
      $character_counter.css("color", "red");
    }
    else {
      $character_counter.css("color", "white");
    }
  });
  /* end character counter */

}); /* end Document ready */