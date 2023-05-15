function cut_webtrends_title( max )
{
	var x = document.title;	
	if ( x.length > max)
		document.title = x.substring(0, max);
}