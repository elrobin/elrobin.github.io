

var StringUtils = (function() {
	return {
		trim: function(str) {
			if (!str) return '';
			return str.replace(/^\s+/, '').replace(/\s+$/, '');
		},
		isEmpty: function(str) {
			if (!str) return true
			return this.trim(str).length == 0;
		},
		entities: function(str) {
			if (!str) return '';
			var entities = [
				['&', '&amp;'],
				['>', '&gt;'],
				['<', '&lt;']
			];
			var n = entities.length;
			for (var i = 0; i < n; ++i) {
				if (str.indexOf(entities[i][0]) != -1) {
					str = str.replace(new RegExp(entities[i][0], 'g'), entities[i][1]);
				}
			}
			return str;
		},
		br: function(str) {
			if (!str) return '';
			if (str.indexOf('\n') != -1 || str.indexOf('\r') != -1) {
				return str.replace(/\r\n|\r|\n/g, '<br />');
			}
			return str;
		},
		textile: function(str) {
			if (!str) return '';
			/*
		 	 * This function originally from Stuart Langridge at http://www.kryogenix.org/
		 	 * Heavily updated by Jeff Minard at http://www.creatimation.net/
		 	 */

			var r = str;			
			if (r.indexOf('*') != -1) {
				re = new RegExp('\\*([^ ][^\\r\\n]*?)\\*', 'g');
				//re = new RegExp('\\*(.+?)\\*', 'g');
				r = r.replace(re, '<strong>$1</strong>');
			}
			if (r.indexOf('_') != -1) {
				re = new RegExp('\\b_(.+?)_\\b', 'g');
				r = r.replace(re, '<em>$1</em>');
			}
			if (r.indexOf('~') != -1) {
				re = new RegExp('~([^ ][^\\r\\n]+?)~', 'g');
				r = r.replace(re, '<sub>$1</sub>');
			}
			if (r.indexOf('^') != -1) {
				re = new RegExp('\\^([^ ][^\\r\\n]+?)\\^', 'g');
				r = r.replace(re, '<sup>$1</sup>');
			}

			// links
			/*if (r.indexOf('"') != -1) {
				re = new RegExp('"\\b(.+?)\\(\\b(.+?)\\b\\)":([^\\s]+)', 'g');
				r = r.replace(re, '<a href="$3" title="$2">$1</a>');
				re = new RegExp('"\\b(.+?)\\b":([^\\s]+)', 'g');
				r = r.replace(re, '<a href="$2">$1</a>');
			}*/

			// block level formatting

			// Jeff's hack to show single line breaks as they should.
			// insert breaks - but you get some....stupid ones
			if (r.indexOf('\n') != -1) {
				re = new RegExp('(.*)\n([^#\*\n].*)', 'gi');
				r = r.replace(re, '$1<br />$2');
				// remove the stupid breaks.
				re = new RegExp('\n*<br */>', 'gi');
				r = r.replace(re, '\n');
			}

			var lines = r.split('\n');
			var l = lines.length;
			for (var i = 0; i < l; ++i) {
				var line = lines[i].replace(/\s*$/, '');
				var changed = false;
				if (line.search(/^\s*bq\.\s+/) != -1) { 
					line = line.replace(/^\s*bq\.\s+/,'\t<blockquote>') + '</blockquote>';
					changed = true; 
				}

				if (line.search(/^\s*\*\s+/) != -1) {
					// * for bullet list; make up an liu tag to be fixed later
					line = line.replace(/^\s*\*\s+/, '\t<liu>') + '</liu>';
					changed = true;
				}
				if (line.search(/^\s*#\s+/) != -1) {
					// # for numeric list; make up an lio tag to be fixed later
					line = line.replace(/^\s*#\s+/, '\t<lio>') + '</lio>';
					changed = true;
				}
				if (!changed && (line.replace(/\s/g,'').length > 0)) {
					line = '<p>' + line + '</p>';
				}
				lines[i] = line + '\n';
			}
			// Second pass to do lists
			var inlist = false; 
			var listtype = '';
			for (var i = 0; i < l; ++i) {
				line = lines[i];
				if (inlist && listtype == 'ul' && !line.match(/^\t<liu/)) {
					line = '</ul>\n' + line;
					inlist = false;
				}
				if (inlist && listtype == 'ol' && !line.match(/^\t<lio/)) {
					line = '</ol>\n' + line;
					inlist = false;
				}
				if (!inlist && line.match(/^\t<liu/)) {
					line = '<ul>' + line;
					inlist = true;
					listtype = 'ul';
				}
				if (!inlist && line.match(/^\t<lio/)) {
					line = '<ol>' + line;
					inlist = true;
					listtype = 'ol';
				}
				lines[i] = line;
			}

			r = lines.join('\n');
			// jeff added : will correctly replace <li(o|u)> AND </li(o|u)>
			r = r.replace(/li[o|u]>/g, 'li>');
			return r;
		}
	};
})();

(function($) {

	$(function() {
		var commentPreviewBox = $('#comment-preview-box');
		var commentPreviewContent = $('#comment-preview li.comment div');
		
		var scope = null;
		var updater = null;
		
		var doPreview = function() {
			if (arguments.callee.text !== this.value) {
				if (!StringUtils.isEmpty(this.value)) {
					commentPreviewContent.html(StringUtils.textile(StringUtils.entities(this.value)));
					commentPreviewBox.css('display', 'block');
				} else {
					commentPreviewBox.css('display', 'none');
				}
				arguments.callee.text = this.value;
			}
		};
		
		$('#comment').focus(function() {
			scope = this;
			updater = setInterval(function() {
				doPreview.apply(scope)
			}, 250);
		}).blur(function() {
			clearInterval(updater);
			doPreview.apply(scope);
			scope = null;
		});
		doPreview.apply($('#comment')[0]);
		
		
		// comment help
		(function() {
			var linkText = 'How do I enter formatted text?';
			$('#comment-help').append('<p><a href="javascript:;" id="comment-help-link">' + linkText + '</a></p>');			
			$('#comment-help-link').click(function() {
				if (!arguments.callee.expanded) {
					$('#comment-help > ul').slideDown('fast');
					$(this).text('Close');
				} else {
					$('#comment-help > ul').slideUp('fast');
					$(this).text(linkText);
				}
				arguments.callee.expanded = !arguments.callee.expanded;
			});
			$('#comment-help > ul').css('display', 'none');
		})();
		
		var togglePostedBy = function() {
  		if (this.checked) {
  			$('#comment-preview .posted-by .user').html(postedAnon);
  		} else {
  			$('#comment-preview .posted-by .user').html(postedBy);
  		}
  	};
  	var postedAnon = 'Anonymous';
  	var postedBy = $('#comment-preview .posted-by .user').html();
  	$('#comment-anon').bind('click', togglePostedBy);
  	togglePostedBy.apply($('#comment-anon').get(0));

	});
	
})(jQuery);