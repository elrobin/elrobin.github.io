/*
 * WOL jQuery Plugins
 */
(function($) {

    $.fn.searchSelectAll = function(){
        return this.each(function(){
            var root = $(this).closest("ol, ul");
            var that = $(this);
            that.is(":checked") && root.find("li > input").not(that).attr("checked", "checked");
            root.delegate("input", "click", function(){
                if($(this).attr("id") == that.attr("id")){
                    if ($(this).is(":checked")){
                        root.find("li > input").not(that).attr("checked", "checked");
                    } else {
                        root.find("li > input").attr("checked", "");
                    }
                }else{
                    if ($(this).is(":checked")){
                        (root.find("li > input:checked").not(that).length == root.find("li > input").not(that).length) && that.attr("checked", "checked");
                    } else {
                        that.attr("checked", "");
                    }
                }
            });
        });
    };

    $.fn.slider = function(){
        var slideCollection = $("#authorsDetail, #editorsDetail, #publicationHistoryDetails, #howToCite, #errata, #fundingInfo, #isbnInfo, #bookSeriesInfo");
        var slideCount = 0;
        var reveal = $("<a href='#'>(Show All)</a>");
        if (slideCollection.length > 0){
            var toggleSections = $("<p id=\"toggleAddInfo\"></p>");
            slideCollection.each(function(){
                var that = $(this);
                var name;

                that.bind("slider", function(){
                    if ($(this).is(":visible")){
                        $(this).slideUp();
                        slideCount--;
                    } else {
                        $(this).slideDown();
                        slideCount++;
                    }

                    if(slideCount == 0){
                        reveal.text("(Show All)");
                    } else if (slideCount == slideCollection.length){
                        reveal.text("(Hide All)");
                    }
                });

                if($(this).attr("id") == "authorsDetail")
                    name = "Author Information";
                else if($(this).attr("id") == "editorsDetail")
                    name = "Editor Information";
                else if($(this).attr("id") == "publicationHistoryDetails")
                    name = "Publication History";
                else if($(this).attr("id") == "howToCite")
                    name = "How to Cite";
                else if($(this).attr("id") == "fundingInfo")
                    name="Funding Information";
                else if($(this).attr("id") == "isbnInfo")
                    name = "ISBN Information";
                else if($(this).attr("id") == "bookSeriesInfo")
                    name = "Book Series Information";
                else
                    name = "Corrections";

                $("<a href='#'>" + name + "</a>").click(function(){
                    that.trigger("slider");
                    return false;
                }).appendTo(toggleSections);
            });

            toggleSections.insertAfter("#additionalInformation .articleCategory");

            reveal.click(function(){
                if ($(this).text() == "(Show All)") {
                    slideCollection.show();
                    $(this).text("(Hide All)");
                    slideCount = slideCollection.length;
                } else {
                    slideCollection.hide();
                    $(this).text("(Show All)");
                    slideCount = 0;
                }
                return false;
            }).appendTo("#additionalInformation .articleCategory");
        }
    };

    $.fn.subjectTree = function() {
        var hoverAndFocusHandler = function(e) {
            var li = $(this),
                div = li.children("div"),
                bodyHeight = $("body").height();

            li.parent().children("li").removeClass("hover");
            div.css("width", li.find("ol").length * 15 +"em");

           li.addClass("hover");

            if (li.data("done")) return;
            li.data("done", true);
            
            var heightAndPositionFromTop = Math.floor(div.offset().top) + Math.floor(div.outerHeight()) + 130;
                        
            if(heightAndPositionFromTop > bodyHeight) {
                var offset = bodyHeight - heightAndPositionFromTop;
                div.css("top", offset);
            }
        };

        return this.each(function() {
            $(this).children("li")
                .hover(hoverAndFocusHandler,function(){
                    $(this).removeClass("hover");
                })
                .children("a")
                .attr("href", "#")
                .keydown(function(e) {
                    if(e.which == 13) {
                        e.preventDefault();
                        var li = $(this).parent();
                        if(li.hasClass("hover")) {
                            li.removeClass("hover");
                        } else {
                            hoverAndFocusHandler.call(li);
                        }
                        return false;
                    }
                })
                .end()
                .find("> div li a")
                .focus(function() {
                    $(this).parent().addClass("hover");
                })
                .blur(function() {
                    $(this).parent().removeClass("hover");
                });
        });
    };

    $.fn.profileMenu = function() {
        return this.each(function() {
            var showing = false;
            $(this).hover(function(){
                if (!showing){
                    $(this).find("ul").fadeIn("fast",function(){});
                    showing=true;
                }
            },
            function(){
                if (showing){
                    $(this).find("ul").fadeOut("slow",function(){showing = false;});
                }
            });
        });
    };

    $.fn.issueTree = function() {
        this.each(function() {
            $(this).click(function() {
                var doiForYear = $(this).attr("href").split("/journal/")[1].split("/issues")[0];
                var year = ($(this).attr("href")).split("?")[1].split("=")[1];
                var branch = $(this).next("ol");

                if(branch && branch.css("display") == "block") {
                    branch.slideUp(function(){
                        $(this).prev().removeClass('open').addClass('closed');
                        storeState();
                    });
                } else if(branch && branch.css("display") == "none") {
                    branch.slideDown(function(){
                        $(this).prev().removeClass('closed').addClass('open');
                        storeState();
                    });
                } else if(!$(this).hasClass('fetching')){
                    var that = $(this);
                    $.ajax({
                        type :"GET",
                        url :"/journal/" + doiForYear + "/issues/fragment?activeYear=" + year + "&SKIP_DECORATION=true",
                        dataType : "html",
                        beforeSend : function() {
                            $(that).removeClass('closed').addClass('fetching');
                        },
                        success : function(htmlForIssues) {
                            $(that).after($(htmlForIssues).css("display","none"));
                            $(that).next("ol").slideDown(function() {
                                $(this).prev().removeClass('fetching').addClass('open');
                                storeState();
                            });
                        }
                        ,
                        error : function(x, t, e){
                            $(this).prev().removeClass('fetching').addClass('closed');
                        }
                    });
                }
                return false;
            });
        });
        function storeState() {
            $.cookie("allIssuesTree", null, {path:"/"});
            var data = [];
            $(".issueVolumes>li").each(function(i, e) {
                data[i] = $(e).find("ol").css("display") == "block" ? 1 : 0;
            });
            $.cookie("allIssuesTree", getDoiFromURL()+" "+data.join(""), {path: '/'});
        };
        function restoreState() {
            var state = $.cookie("allIssuesTree");
            if(state && state.substring(0, state.indexOf(" "))==getDoiFromURL() && $(".issueVolumes").length) {
                var data = state.substr(state.indexOf(" ")+1).split("");
                $(".issueVolumes>li").each(function(i, e) {
                    if(data[i] == 1) $(e).find("a").click();
                });
            }
        };
        function getDoiFromURL() {
            var path = window.location.pathname;
            var doi = path.substr(path.indexOf("journal/"));
            doi = doi.substring(0, doi.indexOf("/issues"))
            return doi;
        };
        restoreState();
        return this;
    };

    $.fn.selectAll = function(){
        
        (this.length > 0) ? $('.selectAll fieldset').show() : 0; //hide "select all" if there is no list
        
        return this.each(function(){  
            if($(this).parents("ol").length == 0){
                var that = $(this),
                    form = that.parents("form"),
                    selectAlls = form.find("div.selectAll input[type='checkbox']"),
                    checkboxes = (that.parents("#admin").length > 0) ? form.find("td input[type='checkbox']") : form.find("div.access input[type='checkbox']");
                
                 // Apply function to Society Content Alerts
                if(that.hasClass("contentAlerts")){
                    checkboxes = that.find(".societyAlertList input[type='checkbox']");
                }
                    
                form.delegate("input[type='checkbox']", "click", function(e){
                    if ($(this).parents("div").hasClass("selectAll")){
                        if ($(this).is(":checked")){
                            $(checkboxes).attr("checked","checked");
                            $(selectAlls).attr("checked","checked").next("label").text("Deselect All");
                        } else {
                            $(checkboxes).removeAttr("checked");
                            $(selectAlls).removeAttr("checked").next("label").text("Select All");
                        }
                    } else {
                        if (checkboxes.filter(":checked").length === checkboxes.length){                            
                            $(selectAlls).attr("checked","checked").next("label").text("Deselect All");                            
                        } else {
                            $(selectAlls).removeAttr("checked").next("label").text("Select All");
                        }
                    }
                });
            }
        });
    };

    $.fn.selectAllNew = function(buttonLocs){
      return this.each(function(n){
        var checkbox = $("<div class=\"selectAll\"><input type=\"checkbox\" name=\"selectAll\" class=\"selectAll\" value=\"selectAll\"/><label>Select All</label></div>");
        var selectName = "selectAll"+n;
        checkbox.find("input").attr("id", selectName).next().attr("for", selectName);

        $.each(buttonLocs, function(i,n){
                $(n)[i](checkbox.clone());
        });

        var checkboxes = $(this).find("input[type='checkbox']:not(.selectAll)");
        var selectAlls = $(this).find("input.selectAll");
        $(this).delegate("input[type='checkbox']", "click", function(){
          if ($(this).hasClass("selectAll")){
            if ($(this).is(":checked")){
              $(checkboxes).attr("checked","checked");
              $(selectAlls).attr("checked","checked").next("label").text("Deselect All");
            } else {
              $(checkboxes).removeAttr("checked");
              $(selectAlls).removeAttr("checked").next("label").text("Select All");
            }
          } else {
            if (checkboxes.filter(":checked").length == checkboxes.length){
              $(selectAlls).attr("checked","checked").next("label").text("Deselect All");
            } else {
              $(selectAlls).removeAttr("checked").next("label").text("Select All");
            }
          }
        });
      });
    };

    $.fn.loginLabels = function(){
        return this.each(function(){
			$(this).val('');
            if($(this).val() != ""){
                $(this).prev().hide();
            };
            $(this).focus(function(){
                $(this).prev().hide();
            }).blur(function(){
                if($(this).val() == ""){
                    $(this).prev().show();
                }
            });
        });
    };

    $.fn.contextFilter = function(){
        var originalContextReceiver = $(".contextReceiver").clone();

        return $(this).change(function(){

            var that = this,
                 contextReceiver = $(this).siblings(".contextReceiver"),
                 country = $(that).find("option:selected").text(),
                 newContextReceiver = originalContextReceiver.clone(),
                 regionOptions = "",
                 selectRegion = $("<optgroup label=\"\"><option value=\"\">Select your region</option></optgroup>");

            if (!originalContextReceiver.find("optgroup[label=" + country + "]").length) {
                contextReceiver.find("option[selected]").removeAttr("selected");
                contextReceiver.val(""); //resolves a IE issue
                contextReceiver.prev("label").andSelf().hide();
            } else {
                regionOptions = newContextReceiver.find("optgroup[label=" + country + "]");
                $(".contextReceiver").empty().append(selectRegion).append(regionOptions).prev("label").andSelf().show();
                $(".contextReceiver optgroup").css({width: "100%"}); //resizing issue fix in IE
            }

        }).trigger("change");
    };

    $.fn.fileUploadFix = function() {
        return this.each(function() {
            $("label[for='"+$(this).attr("id")+"']")
                .after("<input id=\""+$(this).attr("id")+"Dummy\" class=\"fileUpload\" style=\"width:12.35em\" /><div class=\"dummyFileButton\" id=\""+$(this).attr("id")+"DummySubmit\"><input type=\"button\" value=\"Browse\" class=\"dummyFileButton\" /></div>")
                .add(this)
                .add("#"+$(this).attr("id")+"Dummy")
                .add("#"+$(this).attr("id")+"DummySubmit")
                .wrapAll($("<div class=\"uploadContainer\" />"))
                .eq(1)
                .addClass("fileUpload")
                .css({"opacity":"0","z-index":1})
                .change(function(){
                    $("#"+$(this).attr("id")+"Dummy").val($(this).val());
                }
            ).trigger("change");
        });
    };

    $.fn.addResourceMenu = function(){
      var resources = {
             "1" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-390244.html","text":"Training and Tutorials"},
             "2" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-404512.html","text":"For Researchers"},
             "3" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-404513.html","text":"For Librarians"},
             "4" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-404518.html","text":"For Societies"},
             "5" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-404516.html","text":"For Authors"},
             "6" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-390236.html","text":"For Advertisers"},
             "7" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-390242.html","text":"For Media"},
             "8" : {"link":"http://olabout.wiley.com/WileyCDA/Section/id-390243.html","text":"For Agents"}
            };

        var div = $("<div id=\"resourcesMenu\"></div>");
        var list = $("<ul/>");

        jQuery.each(resources,function(i,v){
            $("<li>"+"<a href="+v['link'] +">"+ v['text'] +"</a></li>").appendTo(list);
        });
        $(list).appendTo(div);
        $(this).append(div);
    };

    $.fn.mrwTables = function() {
        return this.each(function(){
            $("<a href=\"#\" class=\"viewTable\">View table</a>").prependTo($(this).children(".title")).toggle(function() {
                    $(this).text("Hide table")
                           .parent()
                           .next(".table-container")
                           .slideDown("fast", function(){
                                $(this).css("zoom" , 1);
                            });
                           
                    return false;
                },
                function(){
                    $(this).text("View table")
                           .parent()
                           .next(".table-container")
                           .slideUp();
                    
                    return false;
                }
            );

            location.hash.split("#")[1] && ($(this).attr("id") == location.hash.split("#")[1]) && $(this).find(".viewTable").trigger("click");
        });
    };

    $.fn.jumpList = function(){
        if (this.length < 1) return;
        
        var that = this,
            firstList = that.first(0),
            containerBounds = firstList.parent().width(),
            //Changed for story OL-13172
            $select = $("<select class=\"jumpSelect\" ><option value=\"jumpTo\">Jump to&hellip;</option></select>");
            didScroll = true,
            options = "",
            selectWidth = firstList.width() + 55; // Add 55 for padding, chrome and scrollbar of selectbox
                                
        //bind select behaviour
        $("#content")
            .delegate(".jumpSelect", "change", function(){
                var $this = $(this);
                window.location.hash = "";
                window.location.hash = $this.val();
                $this.val("jumpTo");
                $(document).trigger("scroll");
            })
            .delegate(".jumpSelect", "focusin, mousedown", function(){
                var $this = $(this);
                if ($this.find("option").length === 1){
                	//Changed for story OL-13172
                    $this.append(options);
                }
            });
        
        //construct option list
        options = (function buildOptions(){
            var i,
                $links = firstList.children("li").find("a:first"),
                listLen = $links.length,
                $link,
                parsedText,
                opts = [];
               
            for(i = 0; i < listLen; i++){
                $link = $links.eq(i);
               
                parsedText = $link.getAltAndText();
                (parsedText.length > 120) && (parsedText = parsedText.substring(0, 120) + "&hellip;");
                opts[i] = '<option value=\"' + $link.attr("href") + '\">' + parsedText + "</option>";
            }
            return opts.join('');        
        })();
  
        if(selectWidth <= containerBounds) {
            $select.css("width", ((selectWidth < 438) ? selectWidth : 438));
        } else {
            $select.css({"clear":"left", "width":"100%", "marginLeft":0});
        }
                
        //insert <select> as user scrolls in the page
        $(window)
            .resize(function(){
                didScroll = true;
            })
            .scroll(function() {
                didScroll = true;
            });
        
        setInterval(function() {
            if (didScroll) {
                didScroll = false;
                renderInViewport(that);
            }
        }, 500);
        
        function renderInViewport ($el){
            $el.each(function(){
                var $this = $(this),
                    header = $this.prev(),
                    docPos = $(document).scrollTop(),
                    dist = header.offset().top;

                if((dist > docPos - 20) && (dist < docPos + $(window).height())){    
                    if(!header.find(".jumpSelect").length){
                        
                        $select.clone(true).prependTo($this.prev());
                    }
                }
            });
        };
    };
    
    $.fn.getAltAndText = function(){
        var linkImg = this.find("img");
        if (linkImg.length) {
            $.each(linkImg, function() {
                var $this = $(this);
                $this.replaceWith($this.attr("alt"));
            });
        }
        return this.html();
    };

    $.fn.socialBookmarks = function(){
        return this.each(function(){
            var shareLink = "<a href=\"http://www.addthis.com/bookmark.php?v=250&amp;username=ra-51225be51b56b4c4\" class=\"addthis_button_compact\">Share</a>",
                separator = "<span class=\"addthis_separator\">|</span>",
                socialLinks = "<a class=\"addthis_button_citeulike\"></a>" +
                              "<a class=\"addthis_button_facebook\"></a>" +
                              "<a class=\"addthis_button_delicious\"></a>" +
                              "<a class=\"addthis_button_www.mendeley.com\"></a>" +
                              "<a class=\"addthis_button_twitter\"></a>";

            $("<div/>",{"class":"addthis_toolbox addthis_default_style"})
                .html(shareLink+separator+socialLinks)
                .insertAfter($(this));
        });
    };
    
    $.fn.selectText = function() {
        var obj = $(this)[0];
        if ($.browser.msie) {
            var range = document.body.createTextRange();
            range.moveToElementText(obj);
            range.select();
        } else if ($.browser.mozilla || $.browser.opera) {
            var selection = obj.ownerDocument.defaultView.getSelection();
            var range = obj.ownerDocument.createRange();
            range.selectNodeContents(obj);
            selection.removeAllRanges();
            selection.addRange(range);
        } else if ($.browser.safari) {
            var selection = obj.ownerDocument.defaultView.getSelection();
            selection.setBaseAndExtent(obj, 0, obj, 1);
        }
        return this;
    }
    
    $.fn.loadDataTable= function(){
        return this.each(function(){
            var link = $(this).find("p a").attr("href"),
                loadIndicator = $("<div class='loading'>Loading usage data&hellip;</div>"),
                reportContainer = $(this);
                 
            reportContainer.empty();
            reportContainer.css('display','block');
            reportContainer.append(loadIndicator);
            
            $.ajax({
                url:link,
                success:function(data){
                    reportContainer.find(".loading").slideUp();
                    reportContainer.append(data);
                    $(reportContainer).clipBoard();
                },
                error:function(err){
                    reportContainer.find(".loading").html("Error displaying usage data");
                    reportContainer.find(".loading").addClass('error');
                }
            });
        });
    }
    
    $.fn.clipBoard = function(){
        if(typeof ZeroClipboard != 'undefined'){
            var clip = null,
                path,
                cell;
                
                if(location.protocol == "file:")
                    path = "../js/zeroclipboard/zeroclipboard10.swf";
                else if(location.host == "showroom.wiley.com")
                    path = "http://showroom.wiley.com/projectAssets/srSubversionStorageAccessor/6ce4edfd0253e5c0fe8cc6ea3931e2ce/-1/zeroclipboard/zeroclipboard10.swf";
                else
                    path = location.protocol + '//' + location.host + "/js/zeroclipboard/zeroclipboard10.swf";
                
                // Convert path for QAF and Live
                path = path.replace(/onlinelibrary/, "onlinelibrarystatic");
            
            ZeroClipboard.setMoviePath(path);
            clip = new ZeroClipboard.Client();
        
            $("#usageData table tbody tr td, input#tableCopyButton").mouseover(function(){
                cell = $(this);
                clip.setText(this.innerHTML);       
                if (clip.div) {
                    clip.receiveEvent('mouseout', null);
                    clip.reposition(this);
                }
                else clip.glue(this);
                
                if(cell.attr('id') != "tableCopyButton"){
                    clip.setHandCursor( false );
                    $("#ZeroClipboardMovie_1").parent().width($(cell).width()+ 10).height($(cell).height()+10);
                    $("#ZeroClipboardMovie_1").width($(cell).width() + 10).height($(cell).height() + 10);
                }else{
                    clip.setHandCursor( true );
                    $("#ZeroClipboardMovie_1").parent().width($(cell).width()).height($(cell).height());
                    $("#ZeroClipboardMovie_1").width($(cell).width()).height($(cell).height());
                    clip.setText('<table>'+$("#usageDataTable").html()+'</table>');
                }
                clip.receiveEvent('mouseover', null);       
            });
        
            clip.addEventListener('onComplete', function(){
                var label = $('<label class="advice">Copied table to clipboard</label>'),
                    id = cell.attr('id');
              
                if(id == "tableCopyButton"){
                    cell.parent().find("label").each(function(){$(this).remove();});
                    $(cell).after(label);
                    $(label).delay(7000).fadeOut();
                }else{
                    $(cell).selectText();
                }
            });
        }
    }
    
    // Unescape html encoded with freemarker ?html parameter
    $.fn.unEscapeHtml = function(options){
        var exclude = [];
        (options) && $.extend(exclude, options);
        var methods = {
            renderHtmlTag : function(para){
                for(var i = 0; i<exclude.length;i++){
                    var startRegEx = new RegExp("&lt;"+exclude[i]+"&gt;", "gi"),
                        endRegEx = new RegExp("&lt;/"+exclude[i]+"&gt;", "gi")
                        startMatches = $(para).html().match(startRegEx)||[],
                        endMatches = $(para).html().match(endRegEx)||[];
                    
                    for(var c = 0; c < startMatches.length; c++){
                        if(endMatches[c] != null){
                            var openTagEx = new RegExp(startMatches[c], ''),
                                closeTagEx = new RegExp(endMatches[c], '');
                        
                            $(para).html($(para).html().replace(openTagEx, "<"+exclude[i]+">"));
                            $(para).html($(para).html().replace(closeTagEx, "</"+exclude[i]+">"));
                        }
                    }
                }
            }
        }
        return this.each(function(){
            $(this).find('p').each(function(){
                methods.renderHtmlTag($(this));
            });
        });
    }
    
    $.fn.requestCSV = function(){
        if (this.length < 1) return;
        
        return this.each(function(){
            var that = $(this),
                proceedBtn = that.find("a.proceed");

            proceedBtn.click(function(e){
                that.slideUp(function(){that.remove()});
                e.preventDefault();
            });
        });
    };
    
    /**
     * PPV Payment Details page
     * This will post form data via jQuery to PPV server,
     * get results and data from PPV server, construct a form dynamically
     * and perform a post to the payment gateway 
     */
    $.fn.processPaymentDetail = function(){
        if($(this).length == 0){return;}
        
        return this.each(function(){
            var that = $(this),
                form = that.find("form"),
                submitBtn = form.find('input.submit[value="Submit"]'),
                links = $('a, input[type="submit"]'),
                body = $("body");
            
            submitBtn.removeAttr("disabled");
            
            submitBtn.click(function(e){
                var progressIndicator = $('<div class="processing"><p>Processing Payment Details</p></div>'),
                    ajaxHiddenInput = $('<input type="hidden" name="ajaxSource" value="true"/>'),
                    evtHiddenInput = $('<input type="hidden" name="_eventId_makePayment" value="_eventId_makePayment"/>'),
                    errorMsg = "An error has occurred.";
                    
                body.append(progressIndicator);
                
                //Create hidden input to enable ajax call to PPV server
                form.append(ajaxHiddenInput);
                form.append(evtHiddenInput);
                
                // Prevent links and buttons from being clickable while progress indicator is visible
                $('.processing').css({'height':$(document).height()});
                
                if(that.find(".error").length > 0){
                    that.find(".error").each(function(){
                        $(this).slideUp(function(){
                            $(this).remove();
                        });
                    });
                }

                // Post to PPV server
                $.ajax({
                    type: 'POST',
                    data: $(form).serialize(),
                    url: form.attr("action"),
                    success: function(response){
                        try{
                        	
                            switch (response) {

                            case null:
                            case "":
                                displayError("The payment process has timed out.");
                            break;

                            case "transIdProcessed":
                            	displayError('Your order is being processed, please wait for this to complete. For any payment or access problems, please contact cs-journals@wiley.com.', false);
                                submitBtn.attr('disabled', true);
                            break;

                            default:
                                postForm(JSON.parse(response),'post');
                            }
                            
                            removeProgressIndicator(progressIndicator);
                        }catch(e){
                            removeProgressIndicator(progressIndicator);
                            displayError(errorMsg);
                        }
                    },
                    error: function(response) {
                        removeProgressIndicator(progressIndicator);
                        displayError(errorMsg);
                    }  
                });
                ajaxHiddenInput.remove();
                evtHiddenInput.remove();
                e.preventDefault();
            });
            
            // Post to payment gateway
            var postForm = function(params,method){
                if(params["wpgAvailable"]==="true"){
                    var gatewayForm = $("<form></form>").attr({"method":method, "action":params["URL"]});
                    
                    $.each(params["success"], function(key,value){
                        $.each(value instanceof Array? value : [value], function(i,val){
                           $(document.createElement("input"))
                                .attr({ "type": "hidden", "name": key, "value": val })
                                .appendTo(gatewayForm);
                        }); 
                    }); 
                    
                    body.append(gatewayForm);
                    gatewayForm.submit();
                }else{
                    displayError("Sorry, the Payment Gateway is not available. Please try again later.", false);
                }
            };
            
            var removeProgressIndicator = function(obj){
                obj.fadeOut(function(){
                    $(this).remove();
                });
            };
            
            var displayError = function(msg, renderLink){
                renderLink = typeof renderLink !== 'undefined' ? renderLink : true;
                
                var error = $('<div class="error">'+msg+' </div>'),
                    refreshLink = $('<a href="#" class="timeout-refresh">Please click here to continue.</a>');
                
                $(refreshLink).click(function(e){
                    location.reload(true)
                    e.preventDefault();
                });
                
                if(renderLink){
                    error.append(refreshLink);
                }
                $(".payPerViewForm").before(error);
            };
        });
    };
    
    /**
     * Tab content toggle
     */
    $.fn.tabToggle = function(){
        if($(this).length == 0){return;}
        return this.each(function(){
            var that = $(this),
                tabMenu = that.find(".tabbedContent"),
                tabContent = that.find(".tabContent");

            tabMenu.delegate('li a', 'click', function(e){
                var $this = $(this),
                    $index = $this.parent().index();

                e.preventDefault();

                tabMenu.find("li").each(function(){
                    var $li = $(this),
                        $currIndex = $li.index();

                    if($currIndex !== $index){
                        $li.removeClass("active");
                        tabContent.eq($currIndex).hide()
                    }else{
                        $this.parent().addClass("active");
                        tabContent.eq($index).show()
                    }
                });
            });
        });
    };
    
})(jQuery);
