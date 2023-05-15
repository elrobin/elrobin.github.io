$(document).ready(function(){
 
// Authstring drop downs
   $("#auth-drop ul.child").removeClass("child");
   $("#auth-drop ul.grandchild").removeClass("grandchild");
   
   // When a list item that contains an unordered list
   // is hovered on
   $("#auth-drop li").has("ul").hover(function(){

      //Add a class of current and fade in the sub-menu
      $(this).addClass("current").children("ul").fadeIn();
   }, function() {

      // On mouse off remove the class of current
      // Stop any sub-menu animation and set its display to none
      $(this).removeClass("current").children("ul").stop(true, true).css("display", "none");
   });
});
