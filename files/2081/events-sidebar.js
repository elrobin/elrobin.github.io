jQuery(document).ready(function() {
	jQuery('.EventsSidebarWidget div').hide();
	jQuery('.EventsSidebarWidget div:first').show();
	
	jQuery('.EventsSidebarWidget a').click(function(){
		var theURL = jQuery(this).attr('href')
		window.location = theURL;
		return true;
	})
	
	
	
	/*var test = 0;
	setInterval(function(start) {
	var curropacity = 0;
		if(curropacity < 1){
			var newopacity = parseFloat(curropacity)+0.01;
			var newopacity = parseFloat(test)+0.01;
			//jQuery('#opacity').val(newopacity)
			console.log(newopacity)
			var stylestr = 'opacity:'+newopacity+'; filter:alpha(opacity='+newopacity*100+')'
			//jQuery('#header').attr('style', stylestr)
		}		
	}, 50);*/
	
	
var count = 1;
jQuery('.EventsSidebarWidget div').each(function() {
	jQuery(this).addClass('nb'+count)
	count++;
})
	
	var numImages = 3;
	var currentImage = 1;
	setInterval(function(start) {
		jQuery(".nb" + currentImage).hide();
    	currentImage = (currentImage >= numImages) ? 1 : currentImage + 1;
   		jQuery(".nb" + currentImage).fadeIn(2000);
		}, 10000);
	
 })