(function ($) {
    $(document).ready(function () {
        // jquery for placeholder text
        $(function () {
            // Invoke the plugin
            $('input, textarea').placeholder();
        });

        $('#menu li ul').css('display', 'none');

        // open menu active according to page start
        var url = document.location.toString();
        var hash = url.substring(url.indexOf('#'));
        $(hash).find('#submenu').css('display', 'block');

        //open menu active according to page end
        $('#menu li #spanarrow').addClass('spanarrowdown');

        $('#menu li').click(function (e) {
            $('#menu li #submenu').css('display', 'none');
            $('#menu li div.selected').removeClass('selected');

            $(this).find('div.accord-tab').addClass('selected');
            $(this).find('#submenu').css('display', 'block');
            //<!-- up and down left menu icon start-->
            $('#menu li #spanarrow.spanarrowup').addClass('spanarrowdown');
            $('#menu li #spanarrow.spanarrowup').removeClass('spanarrowup');
            $(this).find('#spanarrow.spanarrowdown').addClass('spanarrowup');
            $(this).find('#spanarrow.spanarrowdown').removeClass('spanarrowdown');
        });

        $('#submenu li').click(function () {
            $('#submenu li').removeClass('highlighted');
            $(this).addClass('highlighted');
            $('#submenu li #submenuinner').css('display', 'none');
            $('#submenu li div.accord-tab-inner selected').removeClass('selected');

            $(this).find('div.accord-tab-inner').addClass('selected');
            $(this).find('#submenuinner').css('display', 'block');
        });

        $('.menu li ul').css('display', 'none');

        //open menu active according to page end
        $('.menu li .spanarrow').each(function () {
            if ($(this).hasClass('spanarrowdown') || $(this).hasClass('spanarrowup')) {
                return;
            }

            $(this).addClass('spanarrowdown');
        });

        $('.menu .accord-tab').click(function (e) {
            var menu = $(this).closest('.menu');

            $(menu).find('li .submenu').css('display', 'none');
            $(menu).find('li div.selected').removeClass('selected');

            $(this).addClass('selected');

            var subMenu = $(this).find('.submenu');
            if (!subMenu.length) {
                subMenu = $(this).parent().find('.submenu');
            }

            if (subMenu.length) {
                $(subMenu).css('display', 'block');
            }

            //<!-- up and down left menu icon start-->
            $(menu).find('li .spanarrow.spanarrowup').addClass('spanarrowdown');
            $(menu).find('li .spanarrow.spanarrowup').removeClass('spanarrowup');
            $(this).find('.spanarrow.spanarrowdown').addClass('spanarrowup');
            $(this).find('.spanarrow.spanarrowdown').removeClass('spanarrowdown');
        });

        $('.menu .accord-tab').each(function () {
            var currentHash = window.location.hash;
            if (!currentHash) {
                $(this).click();
                return false;
            }

            var href = $(this).find('a');
            if (href.length) {
                var target = href.attr('href');
                if (target === currentHash) {
                    $(this).click();
                    return false;
                }
            }
        });

        $('.submenu li').click(function () {
            var subMenu = $(this).closest('.submenu');

            $(subMenu).find('li').removeClass('highlighted');
            $(this).addClass('highlighted');
            $(subMenu).find('li .submenuinner').css('display', 'none');
            $(subMenu).find('li div.accord-tab-inner selected').removeClass('selected');

            $(this).find('div.accord-tab-inner').addClass('selected');
            $(this).find('.submenuinner').css('display', 'block');
        });



        //<!-- Inner li  -->

        //<!--jquery function for left menu end with documentready funcion-->
        $('a.expand').click(function () {
            $('#div_name2').show();
            return false;
        });

        $('#div_name2').mouseleave(function () {
            $('#div_name2').hide();
        });


        if ($("select.round_sb").length) {
            $("select.round_sb").sb("options", { fixedWidth: true });
        }

        if ($('.sb').length) {
            $('.sb').each(function (index, value) {
                $(this).sb("options", { fixedWidth: true });
            });
        }

        $('div.accordion').each(function (index, value) {
            $(this).accordion({ header: "h3" });
        });

        // Accordions
        if ($("#accordion11").length == 1) {
            $("#accordion11").accordion({ header: "h3.acc" });
        }

        $('#accordion11 div.accordion').each(function (index, value) {
            $(this).accordion({ header: "h3.acc" });
        });

        if ($("#accordion12").length == 1) {
            $("#accordion12").accordion({ header: "h3" });
        }

        //hover states on the static widgets
        $('#dialog_link, ul#icons li').hover(
			function () { $(this).addClass('ui-state-hover'); },
			function () { $(this).removeClass('ui-state-hover'); }
		);

        //homepage tab rotator
        $("div.featured div.tabs").each(function () {
            if (!$(this).hasClass('no-rotate')) {
                $(this).tabs().tabs("rotate", ($('input[id$="hfTabRotatorIncrement"]') != null && $('input[id$="hfTabRotatorIncrement"]') != undefined && $('input[id$="hfTabRotatorIncrement"]').val() != undefined && $('input[id$="hfTabRotatorIncrement"]').val() != '' ? $('input[id$="hfTabRotatorIncrement"]').val() : 0), false);
            } else {
                $(this).tabs();
            }
        });

        // Spotlight rotator code - on Home page and on News and Calendar landing page
        if ($.fn.cycle) {
            if ($('#spotlight_rotator').length) {
                //There seems to be a bug in the upgraded jquery cycle that slows spotlight slides.
                //Compensating here in order to keep the Across The Field tabs in sync as much as possible.
                var tout = $('#spotlight_rotator').data('timeout');
                tout = tout - 450;
                $('#spotlight_rotator').cycle({
                    speed: 500
                    , updateActivePagerLink: function (pager, currSlideIndex) {
                        $(pager).find('li').removeClass('activeSlide').filter('li:eq(' + currSlideIndex + ')').addClass('activeSlide');
                    }
					, timeout: tout
					, fx: 'fade'
					, pager: '#rotator_nav'
					, pagerEvent: 'mouseover'
					, pause: true
					, pauseOnPagerHover: false
					, fastOnEvent: 1
					, pagerAnchorBuilder: function (index, slide) {
					    var anchorTarget = (slide.getElementsByTagName("a")[0].target == null || slide.getElementsByTagName("a")[0].target == '') ? '_self' : slide.getElementsByTagName("a")[0].target;
					    return '<li onclick=\'stopSpotlightRotation();\'><div><a href=\'javascript:void(0);\' onclick=\'window.open(\"' + slide.getElementsByTagName("a")[0].href + '\", \"' + anchorTarget + '\");\' title=\"' + slide.title + '\">' + slide.title + '</a></div></li>';
					}
                });

                function getSpotlight() {
                    var parent = $(this).closest('.spotlight_wrapper');
                    return parent.find('#spotlight_rotator');
                }

                $('#rotator_nav li').hover(function () {
                    var spotlight = getSpotlight.call(this);
                    spotlight.cycle('pause');
                }, function () {
                    var spotlight = getSpotlight.call(this);
                    if (spotlight.attr('stopped') !== '1') {
                        spotlight.cycle('resume');
                    }
                });
            }
        }

        // am program listing
        if ($('.transcript-toggle-button').length) {

            function handleToggle(element, newText) {
                var attr = element.data('element');
                if (attr && $(attr)) {
                    $(attr).toggle();
                }
                element.html(newText);
            }

            $('.transcript-toggle-button').toggle(
				function () {
				    handleToggle($(this), 'Show Transcript &raquo;');
				},
				function () {
				    handleToggle($(this), 'Hide Transcript &raquo;');
				}
			);
        }

        // article pages
        $("div.transcript > a.handle").click(function () {
            var parent = $(this).parent();

            $(this).toggleClass("opened");

            var isOpen = $(this).hasClass("opened");

            $(this).html(isOpen ? "Hide Transcript &#9650;" : "Show Transcript &#9660;");

            var content = parent.find('div[data-type="content"]');

            if (isOpen) {
                var full = parent.find('div[data-type="full"]');
                content.html(full.html());
            } else {
                var summary = parent.find('div[data-type="summary"]');
                content.html(summary.html());
            }

            return false;
        });

        // article slider
        if ($('.slideshow .slideshow-slides').length) {
            $('.slideshow .slideshow-slides').cycle({
                speed: 500
                , before: function (currSlideElement, nextSlideElement, options, forwardFlag) {
                    if ($(nextSlideElement).attr('rel') != undefined && $(nextSlideElement).attr('rel') != null && $(nextSlideElement).attr('rel') != '') {
                        if ($('#slideintro' + $(nextSlideElement).attr('rel')) != null && $('#slideintro' + $(nextSlideElement).attr('rel')) != undefined && $('#slideintro' + $(nextSlideElement).attr('rel')).html() != '') {
                            $('div.ssText').css('display', 'none').filter('#slideintro' + $(nextSlideElement).attr('rel')).fadeIn();
                        }
                        if ($('#slidebody' + $(nextSlideElement).attr('rel')) != null && $('#slidebody' + $(nextSlideElement).attr('rel')) != undefined && $('#slidebody' + $(nextSlideElement).attr('rel')).html() != '') {
                            $('div.ssContent').css('display', 'none').filter('#slidebody' + $(nextSlideElement).attr('rel')).fadeIn();
                        }
                        var slideShowExtrasDiv = ($('div.ssText').filter('#slideintro' + $(nextSlideElement).attr('rel')).parent('div.slideshowExtras') != null ||
                                                    $('div.ssText').filter('#slideintro' + $(nextSlideElement).attr('rel')).parent('div.slideshowExtras') != undefined)
                                                    ? $('div.ssText').filter('#slideintro' + $(nextSlideElement).attr('rel')).parent('div.slideshowExtras')
                                                    : $('div.ssContent').filter('#slideintro' + $(nextSlideElement).attr('rel')).parent('div.slideshowExtras');
                        if (slideShowExtrasDiv != null && slideShowExtrasDiv != undefined) {
                            $('div.slideshowExtras').css('display', 'none').filter(slideShowExtrasDiv).fadeIn();
                        }
                    }
                    if ($('a.captionShrinker', nextSlideElement).hasClass('caption-closed')) {
                        $(nextSlideElement).find('.content').hide();
                    } else {
                        $(nextSlideElement).find('.content').show();
                    }
                }
                , updateActivePagerLink: function (pager, currSlide) {
                    $(pager).find('a').removeClass('activeSlide').filter('a:eq(' + currSlide + ')').addClass('activeSlide');
                }
				, timeout: ($('input[id$="hfSlideRotationTimeout"]') != null && $('input[id$="hfSlideRotationTimeout"]') != undefined && $('input[id$="hfSlideRotationTimeout"]').val() != undefined && $('input[id$="hfSlideRotationTimeout"]').val() != '' ? $('input[id$="hfSlideRotationTimeout"]').val() : 0)
				, fx: 'fade'
				, pager: '.slideshow .slideshow-navigation ul'
				, pagerEvent: 'mouseover'
				, pause: true
				, pauseOnPagerHover: false
				, containerResize: 0
				, fastOnEvent: 1
				, pagerAnchorBuilder: function (index, slide) {
				    return '<li ><a href="javascript:void(0);" onclick="stopSlideshowRotation()" title="' + slide.title + '"></a></li>';
				}
            });
            $('.slideshow .slideshow-navigation ul a').hover(function () {
                $('.slideshow .slideshow-slides').cycle('pause');
            }, function () {
                var stopped = ($('.slideshow .slideshow-slides').attr('stopped') == '1');
                if (!stopped) {
                    $('.slideshow .slideshow-slides').cycle('resume');
                }
            });
        }

        var rotateClickDisabled = false;
        if (!$('div.tabs').hasClass('no-rotate')) {
            $('div.tabs').each(function (i) {
                var rotateSpeed = ($('input[id$="hfTabRotatorIncrement"]') != null && $('input[id$="hfTabRotatorIncrement"]') != undefined && $('input[id$="hfTabRotatorIncrement"]').val() != undefined && $('input[id$="hfTabRotatorIncrement"]').val() != '' ? $('input[id$="hfTabRotatorIncrement"]').val() : 0);
                $(this).tabs().tabs("rotate", rotateSpeed, false);
                var tabsParent = $(this).attr('id');
                $(this).find('ul.ui-tabs-nav li').each(function (index) {
                    $(this).find('a').click(function () {
                        rotateClickDisabled = true;
                        $('#' + tabsParent).tabs('rotate', 0, false);
                    });
                });
                $(this).hover(function () {
                    $(this).tabs('rotate', 0, false);
                }, function () {
                    if (!rotateClickDisabled) {
                        $(this).tabs().tabs('rotate', rotateSpeed);
                    }
                });
            });
        }

        $(".slideshow a.captionShrinker").click(function () {
            $(this).next().slideToggle();
            $(this).parents('.slideshow').find('a.captionShrinker').toggleClass("caption-closed");
        });

        // dates and deadlines tabs
        var elements = $('#tab-headers > li');
        if (elements.length) {
            elements.click(function () {
                elements.removeClass('active');

                $('.tabdashbord').hide();

                var attr = $(this).find('a:first').attr('href');

                $(attr).show();

                $(this).addClass('active');
                return false;
            });
        }

        var buttons = { previous: $('#jslidernews2 .button-previous'),
            next: $('#jslidernews2 .button-next')
        };
        $('#jslidernews2').lofJSidernews({ interval: 5000,
            easing: 'easeInOutQuad',
            duration: 1200,
            auto: true,
            mainWidth: 684,
            mainHeight: 300,
            navigatorHeight: 100,
            navigatorWidth: 310,
            maxItemDisplay: 3,
            buttons: ''
        });
        $(".firstevent").css('display', 'block');

        if ($("div.faq").length) {
            $("div.faq").accordion({ autoHeight: false, icons: false });
            $("div.faq > a").append("<span class='expander closed'>&#9650;</span><span class='expander opened'>&#9660;</span>");

            $('div.faq').bind('accordionchange', function (event, ui) {
                $(ui.newHeader).find("span.ui-icon").html('&#9650;'); // jQuery object, activated header
                $(ui.oldHeader).find("span.ui-icon").html('&#9660;'); // jQuery object, previous header
            });

            $("div.faq > ul > li > a").click(function () {
                var expander = $(this).find("span.expander");
                expander.html(expander.html() == '+' ? '&#8210;' : '+');

                $(this).next().slideToggle("fast");
                return false;
            }).append("<span class='expander'>+</span>");
        }

        $('.accord-tab-inner').each(function () {
            $(this).click(function () {

                if ($('.annual-meeting-navigation').length) {
                    return;
                }

                var next = $(this).next('ul');
                if (next.length) {
                    next.toggle();
                }
            });
        });

        var popular = $('.popular-articles');
        if (popular.length) {
            $.ajax({
                type: "POST",
                url: "/services/SfN/ItemService.asmx/PopularArticles",
                cache: false,
                contentType: "application/json; charset=utf-8",
                data: "{}",
                dataType: "json",
                success: function (data, status) {
                    $(popular).each(function () {
                        $(this).find('.popular-articles-content').html(data.d);
                    });
                }
            });
        }

        $('.browseform-row select').click(function () {
            if (typeof f_tcalHideAll !== 'undefined') {
                f_tcalHideAll();
            }
        });

    });

})(jQuery);

//jquery function for slider end

// Function to delete a cookie
function deleteCookie(c_name) {
    document.cookie = c_name + "=deleted; expires=" + new Date(0).toUTCString();
}

//jqery function for feedback modal
var $jqTools = $;
$jqTools(document).ready(function () {


    $jqTools(".modalTrigger").overlay({
        mask: {
            color: "#000",
            opacity: .5
        },
        top: "center",
        onLoad: function () {
            $jqTools("#feedbackDialog #feedback-name").focus();
        },
        onClose: resetFeedbackForm,

        // The following two options are disabled so that the form
        // can't be closed by an outside click or Esc while feedback
        // is being sent. The form must be closed by clicking the X
        // or the Cancel button (which are hidden while sending).
        closeOnClick: false,
        closeOnEsc: false
    });

    ///////////////////////////////////////////////
    // Search box
    ///////////////////////////////////////////////

    if ($jqTools('.main-search .searchInput').length) {

        var coveoCollectionName = "";
        var hostName = window.location.host;
        // To handle different Coveo Collection name between Stage env and other envs.
        if (hostName.indexOf("sfn.stage.sfn.org") != -1) {
            coveoCollectionName = "CoveoCollectionsSfNOrg (Stage)";
        } else {
            coveoCollectionName = "CoveoCollectionsSfNOrg";
        }

        // When enter is pressed, submit the search query.
        $jqTools('.main-search .searchInput').keypress(function (event) {
            if (event.which === 13) {
                event.preventDefault();
                if ($(this).val() == null || $(this).val() == undefined || $(this).val() == '') {
                    $('.searchInputErrMsg').css('display', 'block');
                    return;
                } else {
                    $('.searchInputErrMsg').css('display', 'none');
                }
                deleteCookie(coveoCollectionName);
                window.location.href = '/search?q=' + $(this).val();
            }
        });

        $jqTools('.main-search .go').click(function (event) {
            event.preventDefault();
            var search = $(this).closest('.search');
            var searchBox = $(search).find('.searchInput');
            if ($(searchBox).val() == null || $(searchBox).val() == undefined || $(searchBox).val() == '') {
                $('.searchInputErrMsg').css('display', 'block');
                return;
            } else {
                $('.searchInputErrMsg').css('display', 'none');
            }
            deleteCookie(coveoCollectionName);
            window.location.href = '/search?q=' + $(searchBox).val();
        });
    }

    $jqTools(".videoModalTrigger").overlay({
        mask: {
            color: "#000",
            opacity: .5
        },
        top: "center",
        onClose: function () {
            $jqTools('.modal object').each(function () {
                jwplayer(this).stop();
            });
        }
    });

    $jqTools(".modalTriggerContact").overlay({
        mask: {
            color: "#000",
            opacity: .5
        },
        top: "center",
        onLoad: function () {
            $jqTools("#feedbackDialog #feedback-name").focus();

            if ($("#hdnEmailSubject").length > 0 && $("#hdnEmailRecipient").length > 0) {
                var subjectField = $jqTools("#hdnEmailSubject");
                var recipientField = $jqTools("#hdnEmailRecipient");
                $jqTools("#feedbackDialog #feedback-subject").val(subjectField.val());
                $jqTools("#feedbackDialog #feedback-recipient").val(recipientField.val());
            }
        },
        onClose: resetFeedbackForm,

        // The following two options are disabled so that the form
        // can't be closed by an outside click or Esc while feedback
        // is being sent. The form must be closed by clicking the X
        // or the Cancel button (which are hidden while sending).
        closeOnClick: false,
        closeOnEsc: false
    });



    $jqTools("#feedbackDialog .submit").click(function (e) {
        e.preventDefault();

        validateFeedbackForm().
			then(function (response) {
			    if (response.isValid) {
			        $jqTools("#feedbackDialog #form-fields").hide();
			        $jqTools("#feedbackDialog #sending").show();

			        // Hide the close button so that the form can't be closed
			        // in the middle of sending a message.
			        $jqTools("#feedbackDialog a.close").hide();

			        var name = $jqTools("#feedbackDialog #feedback-name").val();
			        var email = $jqTools("#feedbackDialog #feedback-email").val();
			        var comments = $jqTools("#feedbackDialog #feedback-comments").val();
			        var subject = $jqTools("#feedbackDialog #feedback-subject").val();
			        var feedbackRecipient = $jqTools("#feedbackDialog #feedback-recipient").val();

			        $jqTools.ajax({
			            type: "POST",
			            dataType: "json",
			            contentType: "application/json; charset=utf-8",
			            url: "/services/Sfn/UtilityService.asmx/SendFeedback",
			            data: "{'name': '" + name + "', 'email': '" + email + "', 'comments': '" + comments + "', 'subject': '" + subject + "', 'feedbackRecipient': '" + feedbackRecipient + "'}",
			            success: function () {
			                $jqTools("#feedbackDialog #sending").hide();
			                $jqTools("#feedbackDialog #sent").show();
			                $jqTools("#feedbackDialog button.close").focus();
			            },
			            error: function () {
			                $jqTools("#feedbackDialog #sending").hide();
			                $jqTools("#feedbackDialog #feedback-send-error").show();
			                $jqTools("#feedbackDialog button.close").focus();
			            },
			            complete: function () {
			                $jqTools("#feedbackDialog a.close").show();
			            }
			        });
			    } else {
			        // User didn't solve the reCAPTCHA. Return and show validation message.
			        return;
			    }
			}).
			fail(function () {
			    // Error calling the reCAPTCHA web service.
			    $jqTools("#recaptcha-error").show();
			});
    });

    function validateFeedbackForm() {
        var dfd = $jqTools.Deferred(),
			isValid = true;

        $jqTools("#feedbackDialog .validation-message").hide();

        // Client side validation...

        if ($jqTools.trim($jqTools("#feedback-name").val()) === "") {
            $jqTools("#feedback-name-blank-val-message").show();
            isValid = false;
        }

        if ($jqTools.trim($jqTools("#feedback-email").val()) === "") {
            $jqTools("#feedback-email-blank-val-message").show();
            isValid = false;
        }
        else if (!validateEmail($jqTools.trim($jqTools("#feedback-email").val()))) {
            $jqTools("#feedback-email-invalid-val-message").show();
            isValid = false;
        }

        if ($jqTools.trim($jqTools("#feedback-comments").val()) === "") {
            $jqTools("#feedback-comments-blank-val-message").show();
            isValid = false;
        }
        var IsRecaptcha = document.getElementsByName('recaptcha_challenge_field');
        if (IsRecaptcha != null && IsRecaptcha != undefined && IsRecaptcha.length != 0) {
            if ($jqTools.trim($jqTools("#recaptcha_response_field").val()) === "") {
                $jqTools("#feedback-captcha-blank-val-message").show();
                isValid = false;
            }
        }

        // Server side validation...

        // If there are already problems with client-side validation,
        // don't bother doing server-side validation for captcha.
        if (!isValid) {
            dfd.resolve({ isValid: false });
        }
        else {
            var ToValidateRecaptcha = $('input[id$="validaterecaptcha"]').val() != '' && $('input[id$="validaterecaptcha"]').val().toLowerCase() == 'true' ? true : false;
            $jqTools("#feedbackDialog #form-fields").hide();
            var IsRecaptcha = document.getElementsByName('recaptcha_challenge_field');
            if (IsRecaptcha != null && IsRecaptcha != undefined && IsRecaptcha.length != 0 && ToValidateRecaptcha) {
                $jqTools("#validating-captcha").show();
                $jqTools.ajax({
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    url: "/services/Sfn/UtilityService.asmx/ValidateRecaptcha",
                    data: "{'challenge': '" + Recaptcha.get_challenge() + "', 'response': '" + Recaptcha.get_response() + "'}",
                    success: function (result) {
                        isValid = result.d;
                        dfd.resolve({ isValid: isValid });

                        if (!isValid) {
                            Recaptcha.reload();
                            $jqTools("#feedback-captcha-invalid-val-message").show();
                            $jqTools("#feedbackDialog #form-fields").show();
                        }
                    },
                    error: function () {
                        dfd.reject();
                    },
                    complete: function () {
                        $jqTools("#validating-captcha").hide();
                    }
                });
            } else if (!ToValidateRecaptcha) {
                isValid = true;
                dfd.resolve({ isValid: isValid });
            }
        }

        return dfd.promise();
    }

    function validateEmail(email) {
        // http://stackoverflow.com/a/46181/11236

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function resetFeedbackForm() {
        $jqTools("#feedbackDialog #feedback-name").val("");
        $jqTools("#feedbackDialog #feedback-email").val("");
        $jqTools("#feedbackDialog #feedback-comments").val("");

        $jqTools("#feedbackDialog .feedback-screen").hide();
        $jqTools("#feedbackDialog #form-fields").show();

        $jqTools("#feedbackDialog .validation-message").hide();

        var IsRecaptcha = document.getElementsByName('recaptcha_challenge_field');
        if (IsRecaptcha != null && IsRecaptcha != undefined && IsRecaptcha.length != 0) {
            Recaptcha.reload();
        }
    }


    // Image enlargements
    $jqTools(".enlarge").overlay({
        mask: {
            color: '#000',
            opacity: 0.5
        },
        top: "center",
        onLoad: function () {
            this.getOverlay().insertAfter('#exposeMask');
        }
    });
});

function stopSpotlightRotation() {
    $('#spotlight_rotator').attr("stopped", "1");
    $('#spotlight_rotator').cycle('pause');
}

function stopSlideshowRotation() {
    $('.slideshow .slideshow-slides').attr("stopped", "1");
    $('.slideshow .slideshow-slides').cycle('pause');
}

(function ($) {
    $(function () {
        $('.annual-meeting-navigation').each(function () {
            $(this).find('.accordion ul').each(function () {
                var selectedChildren = $(this).find('li.selected');
                var isSelected = $(this).hasClass('selected');
                var parentSelected = $(this).closest('ul');
                var previous = $(this).prev();

                if (selectedChildren.length || isSelected ||
                    parentSelected.hasClass('selected') || (previous.length && previous.hasClass('selected'))) {
                    $(this).removeClass('hidden');
                }
            });

            function clickInternalLink(event) {
                var link = $(this).find('a');
                if (link.length) {
                    window.location = link.attr('href');
                    event.preventDefault();
                    return false;
                }
            }

            $(this).find('.accord-tab').click(clickInternalLink);
            $(this).find('.accordion li').click(clickInternalLink);
        });

    });
})(jQuery);
