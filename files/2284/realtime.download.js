$(document).ready(function() {

	
});

var realtimeOpen = false;
var realtimeTryCounter = 0;

function realtimeDownloadPopup(link,href){
	if (realtimeOpen){
		return false;
	}
	realtimeOpen = true;
	
	realtimeTryCounter = 0;
	
	// show layer
	$(link).next().next().css('display', 'block');
	$(link).parent().css('zIndex', '90');
	$(link).next().next().dropShadow();
	
	// Change initial text
	$(link).next().next().find('.realtimePopupHeadline').html(realtimeDownloadHeadline);
	$(link).next().next().find('.realtimePopupHelper').html(requestingPdf);

	var html = $(link).next().find('.realtimeIEDownload').html();
	
	if (html!=null && html != undefined && html != 'undefined' && html != ''){
		
		$(link).next().next().find('.realtimePopupHelper').html(downloadComplete);
		
		if (!($.browser.msie && ($.browser.version =='7.0' || $.browser.version =='8.0' ) )) {
			window.location.href=$(link).next().find('.realtimeIEDownloadLink').attr("href");
		}
		// open new window
		setTimeout(function() {
			realtimeDownloadPopupClose(link);
		},2000);
		
	}else{
		$.ajax( {
			type : "GET",
			url : href,
			data : "",
			dataType : "json",
			success : function(msg) {
				// initial request
				setTimeout(function() {
					getDownloadState(msg.uid,link);
				},1000);
			}
		});
	}
	
}


function getDownloadState(id,link){
	$.ajax( {
		type : "GET",
		url : "/realtimeTopDownload/request/"+id,
		data : "",
		dataType : "json",
		success : function(msg) {
			
			var state = msg.state;
			var sizeInKb = msg.sizeInKb;
			
			realtimeTryCounter++;
			
			if (state== 'noAccessError'){
				$(link).next().next().find('.realtimePopupHelper').html(noAccessError);
				setTimeout(function() {
					realtimeDownloadPopupClose(link);
				},2000);
				return;
			}else
			if (state== 'downloadComplete'){
				$(link).next().next().find('.realtimePopupHelper').html(downloadComplete);
				
				$(link).next().find('.realtimeIEDownload').html(downloadHere);
				$(link).next().find('.realtimeIEDownloadLink').attr("href",msg.downloadUrl);
				// open new window
				setTimeout(function() {
					if (!($.browser.msie && ($.browser.version =='7.0' || $.browser.version =='8.0' ) )) {
						window.location.href=msg.downloadUrl;
					}
				},1200);
				
				setTimeout(function() {
					realtimeDownloadPopupClose(link);
				},2000);
				
				return;
			}else
			if ((realtimeTryCounter >30 &&state!= 'downloadingPdf') || state== 'timeoutError'){
				$(link).next().next().find('.realtimePopupHelper').html(timeoutError);
				setTimeout(function() {
					realtimeDownloadPopupClose(link);
				},2000);
				return;
			}
			if (state== 'downloadingPdf'){
				$(link).next().next().find('.realtimePopupHelper').html(downloadingPdf+"<br/>"+sizeInKb+" kb");
			}
			setTimeout(function() {
				getDownloadState(id,link);
			},1000);
		}
	});
}


function realtimeDownloadPopupClose(link){
	if (realtimeOpen){
		$(link).next().next().css('display', 'none');
		$(link).parent().css('zIndex', '30');
		$(link).next().next().removeShadow();
		
		realtimeOpen = false;
	}
}
	/*
	 * close after timeout
	 	 
	  
	 */
	
