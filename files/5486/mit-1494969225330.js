// Will's Scripts
$(document).ready(function(){
    // Hacks for the Profile Icon and Dropdown
    $('.icons-container #indivLogin').attr('href', 'javascript:void(0)');
    $('.icons-container #indivLogin').click(function(){
        var profileDropdown = $('.icons-container .navigation-login-dropdown-container');
        $(profileDropdown).toggleClass('hidden');
        // Event listener so that clicking anywhere outside will close the menu
        $('html').click(function(event) {
            //check up the tree of the click target to check whether user has clicked outside of menu
            if ($(event.target).parents('.icons-container .navigation-login-dropdown-container').length==0 && $(event.target).parents('.icons-container #indivLogin').length==0) {
                    console.log('click');
                // your code to hide menu
                $(profileDropdown).toggleClass('hidden');
                //this event listener has done its job so we can unbind it.
                $(this).unbind(event);
            }
        });
    });
    // Icon Hacks
    $('.icon-search').removeClass('icon-search').addClass('icon-search2');
    $('.icon-userprofile').removeClass('icon-userprofile').addClass('icon-profile');
    $('.icon-shoppingcart').removeClass('icon-shoppingcart').addClass('icon-cart');
    //$('.icon-search2').removeClass('.icon-search');

    //Mega Menus
    /* Removed because of changes LIT-157793
    $('header nav>ul>li>a').hover(function(){
        if($(this).next('ul').length) {
            if ($(this).next().hasClass('collapsed')) {
                $('header nav .mega-menu .').slideUp(1);
                $('header nav .mega-menu').removeClass('collapsed');
                $('header nav .mega-menu').addClass('collapsed');
                $(this).next().toggleClass('collapsed');
                $(this).next().slideDown(1);
            }
        } else {
            $('header nav .mega-menu').slideUp(1);
            $('header nav .mega-menu').addClass('collapsed');
            }
    });
    $('header nav i.icon-close_thin').click(function(){
        $(this).parents('.mega-menu').toggleClass('collapsed');
        $(this).parents('.mega-menu').slideUp(500);
    })
    */

    //Homepage Carousel
    //$('#nextSlide span').addClass('icon-arrow-material-icon_r').empty();
    //$('#previousSlide span').addClass('icon-arrow-material-icon_l').empty();
	
	if ($("#articleContent .sectionJumpTo")) {
		var jumpElement = $("#articleContent .sectionJumpTo").eq(0).detach();
		$('#jumpTo').append(jumpElement);
		$("#jumpTo option:contains('Choose')").html("Jump To");
	}
  
	checkForJA(); /* Need to do this because there is no Just Accepted scope in PB*/
	checkForJournalContent(); /* Only display links if content is available*/

});

function checkForJA() {
	var href = location.href;
	var last = href.match(/([^\/]*)\/*$/)[1];
	
	if (last == "ja") {
		$("#journalPubLinks").removeClass("regularTocPage").addClass("jaPage");
	}
}
function checkForJournalContent() {
	if (!$("#journalPubLinks .loiLink").length) {
		$(".forthcomingContainer").css("display", "none");
		$(".mostReadCited").css("display", "none");
	}
}
function sortToggle(sortOpenString, sortCloseString, sortString2, action) {
    if (sortOpenString) {   
        $(sortOpenString).css("display", "block");
    }
  
    if (sortCloseString) {
        $(sortCloseString).css("display", "none");
    }
    
    if (sortString2) {
        if (action == 'show') {
            $(sortString2).css("display", "block");
        } else if (action == 'dontshow') {
            $(sortString2).css("display", "none");
        }
    }
}
function journalBrowseOpen(sectionName) {
    var sectionListName = '#'+ sectionName + "List";
    var sectionImgName = '#'+ sectionName + "Img";
    
    $(sectionListName).css('display', 'block');
    $(sectionImgName).css('transform', 'rotate(90deg)');
}
function journalBrowseClose(sectionName) {
    var sectionListName = '#'+ sectionName + "List";
    var sectionImgName = '#'+ sectionName + "Img";

    $(sectionListName).css('display', 'none');
    $(sectionImgName).css('transform', 'none'); 
}
function journalBrowseToggle(sectionName) {
    var sectionListName = '#'+ sectionName + "List";
    var sectionImgName = '#'+ sectionName + "Img";
    var displayState = $(sectionListName).css('display');
    
    if (displayState == "none") {
        journalBrowseOpen(sectionName);
    } else {
        journalBrowseClose(sectionName);
    }
}
function journalHomeLeftToggle(sectionName) {
    var sectionHeaderName = '#'+ sectionName + "Header";
    var sectionContentName = '#'+ sectionName + "Content";
    var sectionImgName = sectionHeaderName + " .journalExpandImage";
    var displayState = $(sectionContentName).css('display');
    
    if (displayState == "none") {
        $(sectionContentName).css('display', 'block');
        $(sectionImgName).css('transform', 'rotate(90deg)');
    } else {
        $(sectionContentName).css('display', 'none');
        $(sectionImgName).css('transform', 'none');
    }
}

function browseOpenCloseAll(openClose) {
    
    if (openClose == 'open') {
        journalBrowseOpen('scienceTechnology');
        journalBrowseOpen('artsHumanities');
        journalBrowseOpen('internationalAffairs');
        journalBrowseOpen('economics');
    } else if (openClose == 'close') {
        journalBrowseClose('scienceTechnology');
        journalBrowseClose('artsHumanities');
        journalBrowseClose('internationalAffairs');
        journalBrowseClose('economics');
    }
}

//LIT-158980 - 05-04-17
function panelToggle(panelID) {
    panelID = '#' + panelID;
    if ($(panelID).css("display") == "none") {
        $(panelID).css("display", "block");
    } else {
        $(panelID).css("display", "none");
    }
}