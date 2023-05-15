(function($) {
	$.widget("ol.dynamicSelectGroup", {
	    _create:function() {
	        this.element.wrap("<fieldset />");
	        this.element.parents("fieldset").parent().wrapInner("<form action=\""+this.element.find("a:first").attr("href").split("?")[0]+"\" class=\"simple\" method=\"get\" />");
	        this.element.parents("form").unwrap().append("<input type=\"submit\" value=\"Download\" class=\"submit\"/>");
	    },
	    _init:function() {
	        this._build();

	        var errorMessage = this.element.parents("form").find("p.error");
	        if(errorMessage.length) {
	            this.element.parents("fieldset").append($("<label/>").addClass("error").attr("for", "productType").html(errorMessage.detach().html()));
	        }
	    },
	    _build:function(listEl, select) {
	        var that = this, tempEl = listEl;

	        this.element.parents("fieldset").children("label.error").remove();

	        if(!listEl) {
	            this.element.find("~select").remove();
	            listEl = this.element;
	        } else {
	            var listDepth = listEl.parents("ul").length;
	            this.element.find("~select").eq(listDepth).find("~select").remove();

	            listEl = listEl.find(">li>ul").filter(function(i) {
	                return $(this).siblings("span").text() === $(select).find("option:selected").text();
	            });
	        }

	        this.element.parent().children("input[type=hidden]").remove();
	        listEl.length && (tempEl = listEl);

	        var qSMap = {};
	        $.each(tempEl.find("a:first").attr("href").split("?")[1].split("&"), function() {
	            if(!that.element.parent().children("#"+this.split("=")[0]).length) qSMap[this.split("=")[0]] = this.split("=")[1];
	        });

	        while(listEl.length) {
	            var classAttr = listEl.attr("class"), className = classAttr.indexOf(" ") > 0 ? classAttr.split(" ")[1] : classAttr;
	            delete qSMap[className];
	            var select = $("<select />")
	                .hide()
	                .attr({id:className, name:className})
	                .bind("change", {"listEl":listEl}, function(event) {
	                    that._build(event.data.listEl, this);
	                })
	                .appendTo(this.element.parent());

	            $($.map(listEl.find(">li"), function(el){
	                return $("<option />").attr("value", that._getValueFromQS(el, className)).text($(el).children("span, a").text());
	            })).appendTo(select.fadeIn("slow"));

	            listEl = listEl.find(">li:first>ul:first");
	        }

	        $.each(qSMap, function(i, v) {
	            $("<input />").attr({type:"hidden", id:i, name:i}).val(v).appendTo(that.element.parent());
	        });
	    },
	    _getValueFromQS:function(listItem, className) {
	        qs = $(listItem).find("a:first").attr("href").split("?")[1].split("&");

	        return $.grep(qs, function(v, i) {
	            return v.split("=")[0] === className;
	        })[0].split("=")[1];
	    },
	    destroy:function() {
	        this.element.parent().find("select").remove();
	        this.element.show();
	        $.Widget.prototype.destroy.apply(this, arguments);
	    }
	});

	
$.widget("ol.dynamicReportScreen", {
    _create:function() {
        var that = this;
    },
    _init:function() {
        this._buildReport();
        this._buildReportSection();
        $("#reportMonthStart").val(1).attr("selected","selected");
        var errorMessage = this.element.parents("form").find("p.error");
        if(errorMessage.length) {
            this.element.parents("fieldset").append($("<label/>").addClass("error").attr("for", "productType").html(errorMessage.detach().html()));
        }
    },
    _getContext:function() {
        var reportURL = $("#reportUrl").val(),
            URL = location.protocol + "//" + location.host;
       if(reportURL === '/admin-tools-web') {
               URL = URL+'/admin-tools-web';
        }
       return URL;
    },
    _getExternalID: function() {
        var externalID = $("#externalID").val();
        return externalID;
    },
    _buildReportSection:function() {
        var that = this;
        var $show_reports = $("#show_reports"),
            $report = $("table.report"),
            $generate = $("#generate"),
            $del = $(".delete_report"),
            $refresh = $("#refresh_reports"),
            $message = $("#message"),
            $dialog = $("#dialog"),
            $ajaxLoader = $(".ajax-loader");
        // Showing the reports when Clicking on the arrows
        $show_reports.click(function(e) {
            $ajaxLoader.show();
            $("#report_list tbody").remove();
            that._showReports();
            $report.slideToggle(300);
            e.preventDefault();
        });
        // Showing the reports when generate button is clicked
        $generate.click(function(e) {
            that._validateForm();
            e.preventDefault();
        });
        // Refresh Reports
        $refresh.click(function(e){
            $ajaxLoader.show();
            $("#report_list tbody").remove();
            that._showReports();
            $("table.report").slideDown(300);
            e.preventDefault();
        });
    },
    // Added for the date validation.
    _validateForm: function() {
        var productType = $("#productType option:selected").val(),
            reportType = $("#reportType option:selected").val(),
            reportTypeText = $("#reportType option:selected").text(),
            reportYear = $("#reportYear option:selected").val(),
            reportMonthStart = '',
            reportMonth = '',
            reportYearStart = '',
            error = '',
            errorMsg1 = 'Reports cannot span more than 1 year <br />',
            errorMsg2 = 'Please enter a valid date range <br />',
            count = $('#count').html(),
            difference = '',
            monthdiff = '';
        
        if (reportTypeText.indexOf('COUNTER') > -1 || reportTypeText === 'Journal\'s Frontfile Report') {
            reportMonthStart = $("#reportMonthStart option:selected").val();
            reportMonth = $("#reportMonth option:selected").val();
            reportYearStart = $("#reportYearStart option:selected").val();
            difference = reportYear - reportYearStart;
            monthdiff = reportMonth - reportMonthStart;
        }
        else {
            $("#reportMonthStart").empty();
        }
        
        count = (count > 0) ? parseInt(count, 10) + 1 : 1 ;
        
        if((difference === 1 && monthdiff >= 0) || difference > 1) {
            error = errorMsg1;
        }
        else if(difference <= 0 && monthdiff < 0) {
            error = errorMsg2;
        }
        else if(difference < 0) {
                error = errorMsg2;
        }
        if(error) {
            $('label.error').show().html(error);
        }
        else {
            $(".ajax-loader").show();
            var that = this,
            URL = that._getContext(),
            data = $("#usage_report").serialize();
            $.ajax({
                 url: URL+'/admin/queueReportRequest',
                 type: 'get',
                 data: data,
                 cache: false,
                 success: function(result) {
                     if(result === 'Success') {
                             alert("Report added to queue");
                     }
                     else if(result === 'exists') {
                             alert("Report is currently in queue");
                     }
                     else if(result === 'failure') {
                         alert('Error-Please Try Again');
                     }
                     if(result !== '') {
                             that._showReports();
                             $("table.report").slideDown(300);
                     }
                 }
            });
        }
    },
    _showReports: function() {
        var URL = this._getContext(),
            that = this,
            $ajaxLoader = $(".ajax-loader"),
            externalID = that._getExternalID(),
            data = '';
        
        if(externalID) {
            data = 'externalID='+externalID;
        }
        $.ajax({
         url: URL+'/admin/customerReports',
         type: 'get',
         data: data,
         cache: false,
         success: function(result) {
                $("#report_list tbody").remove();
                var jsonData = JSON.parse(result);
                var reportStr = '';
                for (var i in jsonData) {
                    var id = jsonData[i].id,
                        productType = jsonData[i].displayReportType,
                        reportType = jsonData[i].displayReportName,
                        startMonth = jsonData[i].startMonth,
                        startYear = jsonData[i].startYear,
                        endMonth = jsonData[i].endMonth,
                        endYear = jsonData[i].endYear,
                        reportStatus = jsonData[i].displayReportStatus,
                        downloadUrlfortsv = jsonData[i].downloadUrlfortsv,
                        downloadUrlforcsv = jsonData[i].downloadUrlforcsv,
                        downloadUrlforxml = jsonData[i].downloadUrlforxml,
                        downloadUrlforxlsx = jsonData[i].downloadUrlforxlsx,
                        reportCustID = jsonData[i].reportCustID,
                        links = '',
                        del = '<img src="/images/bin.png" title="Delete" />',
                        externalIDStr = '',
                        errRow = '';
                    
                    var startDate = startMonth + ' / ' +startYear,
                        endDate = endMonth + ' / ' +endYear;
                    
                    if(reportStatus === 'Error-Please Try Again') {
                    	errRow = 'class="errRow"';
                    }
                    if(reportStatus === 'Error-Please Try Again' || reportStatus === 'Completed') {
                        del = '<a href="#" id="'+ id +'" data-cust="'+ reportCustID +'" class="delete">'+ del +'</a>';
                    }
                    if(externalID) {
                        externalIDStr = '&externalID='+externalID;
                    }
                    if (reportType.indexOf('COUNTER') > -1 || reportType === 'Journal\'s Frontfile Report') {
                        links = (reportStatus === 'Completed') ? '<a href="'+ URL +''+ downloadUrlforxlsx +''+externalIDStr+'">XLSX</a> | <a href="'+ URL +''+ downloadUrlfortsv +''+externalIDStr+'">TSV</a> | <a href="'+ URL +''+ downloadUrlforxml +''+externalIDStr+'">XML</a>' : 'XLSX | TSV | XML';
                    } 
                    else {
                        endDate = endYear;
                        startDate = 'Not Applicable';
                        links = (reportStatus === 'Completed') ? '<a href="'+ URL +''+ downloadUrlforxlsx +''+externalIDStr+'">XLSX</a> | <a href="'+ URL +''+ downloadUrlforcsv +''+externalIDStr+'">CSV</a>' : 'XLSX | CSV';
                    }
                    reportStr += "<tr "+errRow+"><td>"+ productType +"</td><td>" + reportType + "</td><td>" + startDate + "</td><td>" + endDate + "</td><td>" + reportStatus + "</td><td>"+ links +"</td><td>"+ del +"</td></tr>";
                }
                
                //Appending the report data to the report grid
                $("#report_list").append(reportStr);
                $ajaxLoader.hide();
         }
        });
    },
    _hideErrLabel: function() {
         $('label.error').hide();
    },
    _buildReport:function() {
        var $productType = $("#productType"),
            $reportName = $("#reportType"),
            $startDate = $("#reportYearStart"),
            $endDate = $("#reportYear"),
            $startMonth = $("#reportMonthStart"),
            $endMonth = $("#reportMonth"),
            $reportUsage = $(".report_usage"),
            $reportMonthStartStyle = $(".reportMonthStartStyle"),
            $reportMonthStyle = $(".reportMonthStyle"),
            $reportYearStartStyle = $(".reportYearStartStyle"),
            that = this;
        $reportUsage.find("> li > span").each(function () {
            var $this = $(this);
            $productType.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
        });
        $productType.change(function () {
            var selected = $productType.find("option:selected").val().replace(/\s/g, "");
            $reportName.empty();
            $("span."+selected).each(function() {
                var $this = $(this);
                $reportName.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
            });
            $reportName.trigger("change");
        });
        $reportName.change(function (event) {
            var selected = $reportName.find("option:selected").val(),
                selectedProduct = $productType.find("option:selected").val().replace(/\s/g, "");
            $startDate.empty();
            $endDate.empty();
            $(".reportYearStart span."+selectedProduct+'_'+selected).each(function() {
                var $this = $(this);
                $startDate.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
            });
            $(".reportYear span."+selectedProduct+'_'+selected).each(function() {
                var $this = $(this);
                $endDate.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
            });
            $startDate.trigger("change");
            $endDate.trigger("change");
        });
        $startDate.change(function (event) {
            that._hideErrLabel();
            var selected = $startDate.find("option:selected").val(),
                selectedReport = $reportName.find("option:selected").val(),
                selectedProduct = $productType.find("option:selected").val().replace(/\s/g, "");
            if(!selected) {
                $reportYearStartStyle.hide();
                $reportMonthStartStyle.hide();
            }
            else {
                $reportYearStartStyle.show();
                $reportMonthStartStyle.show();
            }
            $startMonth.empty();
            $(".reportMonthStart span."+selectedProduct+'_'+selectedReport+'_'+selected).each(function() {
                var $this = $(this);
                $startMonth.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
            });
            $startMonth.val(1).attr("selected","selected");
        });
        $endDate.change(function (event) {
            that._hideErrLabel();
            $reportMonthStyle.show();
            var selected = $endDate.find("option:selected").val(),
                reportSelected = $reportName.find("option:selected").val(),
                selectedProduct = $productType.find("option:selected").val().replace(/\s/g, "");
            $endMonth.empty();
            var count = 0;
            $(".reportMonth span."+selectedProduct+'_'+reportSelected+'_'+selected).each(function() {
                var $this = $(this);
                $endMonth.append("<option value='" + $this.attr('id') + "'>" + $this.text() + "</option>");
                count++;
            });
            if(!count) {
                $reportMonthStyle.hide();
            }
        });
        
        $startMonth.change(function(e) {
        	that._hideErrLabel();
        	e.preventDefault();
        });

        $endMonth.change(function(e) {
        	that._hideErrLabel();
        	e.preventDefault();
        });
        
        $productType.trigger("change");
    }
});
$.widget("ol.globalMessaging", {
    _create:function() {
        var self = this, opt = self.options;
        self = $.extend(self, {offset:0,showing:false,available:false,timer:0, isIe6:($.browser.msie && $.browser.version == 6)});

        self.messageElement =
            ($("#globalMessaging").length ? $("#globalMessaging") : $("<div/>").attr("id", "globalMessaging").append("<ul/>"))
            .css({top:0,left:0,position:self.isIe6 ? "absolute" : "fixed"})
            .append($("<a id=\"handle\" href=\"#\">"+opt.openedText+"</a>")
                .click(function() {
                    self.showing ? self.hide() : self.show(true);
                    return false;
                })
             )
             .bgIframe();

        // Move to init()?????
        if(self.messageElement.parent().length > 0) {
            self.available = true;
            self.messageElement.detach().prependTo("body");
            self._setOffset();
            self.canShow = ((self.messageElement.find("li").length > 1) || ((self.messageElement.find("li").length == 1) && ((self.messageElement.find("li.maintenanceMessage").length == 0) || (self.messageElement.find("li.maintenanceMessage").length > 0) && ($.cookie("maintenanceMessageViewed") != "true"))));
            !self.canShow && self.hide(true);
        }

        $(window).bind("resize", function() {
            self.available && ((self.showing && self._setOffset()) || (self._setOffset() && self.hide(true)));
        });

        if(self.isIe6) {
            $(window).bind("scroll", function() {
                self.available && ((self.showing && self.messageElement.css({top:$(window).scrollTop()})) || (!self.showing && self.messageElement.css({top:$(window).scrollTop()+self._getOffset()})));
            });
        };

    },
    _init:function() {
        this.show();
    },
    _getOffset:function() {
        return parseInt("-"+this.offset,10);
    },
    _setOffset:function() {
        return this.offset = parseInt(this.messageElement.children("ul").outerHeight(),10);
    },
    addMessage:function(message, className) {
        var self = this;
        self.hide(true);
        self.messageElement.children("ul").append($("<li>"+message+"</li>").attr("class", className));
        self.messageElement.prependTo("#rightBorder");
        self.available = true;
        self._setOffset();
        self.canShow = ((self.messageElement.find("li").length > 1) || ((self.messageElement.find("li").length == 1) && (self.messageElement.find("li.maintenanceMessage").length > 0) && ($.cookie("maintenanceMessageViewed") != "true")));
        if(self.canShow) {
            self.show();
        } else {
            self.hide(true);
        }
    },
    show:function(persist) {
        var self = this, opt = self.options;

        if(this.available && !self.showing && (persist || self.canShow)) {
            self.messageElement.children("ul").css("visibility", "visible");

            self.messageElement
                .animate({left:0,top:self.isIe6 ? $(window).scrollTop() : 0}, opt.animSpeed, function() {
                    self.messageElement.children("a").html(opt.openedText);
                    if(!persist) {
                        self.timer = setTimeout(function() {
                            self.hide();
                        }, opt.delay);
                    }
                    self.showing = true;
                });

             ($.cookie("maintenanceMessageViewed") != "true") && $.cookie("maintenanceMessageViewed", "true", {path:"/"});
        }
    },
    hide:function(reset) {
        var self = this, opt = self.options;

        if(this.available && (self.showing || reset)) {
            clearTimeout(self.timer);
            self.messageElement
                .clearQueue()
                .animate({top:self.isIe6 ? $(window).scrollTop()+self._getOffset() : self._getOffset()}, reset ? 0 : opt.animSpeed, function() {
                    self.messageElement.children("a").html(opt.closedText);
                    //self.messageElement.children("ul").css("visibility", "hidden");
                    self.showing = false;
                 });
        }
    }
});

$.extend($.ol.globalMessaging.prototype, {
    options:{
        animSpeed:"fast",
        delay:5000,
        openedText:"Hide messages",
        closedText:"Show messages"
    }
});
})(jQuery);
(function($) {
    var reportURL = $("#reportUrl").val(),
        URL = location.protocol + "//" + location.host;
    
    if(reportURL === '/admin-tools-web') {
           URL = URL+'/admin-tools-web';
    }
    $("#report_list").delegate('a.delete', 'click', function(e) {
        var $this = $(this),
            id = $this.attr('id'),
            reportCustID = $this.attr('data-cust'),
            $externalID = $("#externalID").val(),
            $ajaxLoader = $(".ajax-loader").show(),
            externalIDStr = '';
            if($externalID) {
                externalIDStr = '&externalID='+$externalID;
            }
        $.ajax({
            url: URL+'/admin/archiveReport',
            data: 'id='+id+'&custid='+reportCustID+''+externalIDStr,
            type: 'get',
            cache: false,
            success: function(result) {
                if(result === 'Success') {
                    $ajaxLoader.hide();
                    $this.parent('td').parent('tr').fadeOut(500);
                }
            }
        });
        e.preventDefault();
    });
})(jQuery);
 