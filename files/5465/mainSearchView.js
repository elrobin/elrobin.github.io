/**
 * Created by florinaie on 2/10/2016.
 */
AUI().ready(function() {

    if(typeof mainSearchLoadJavascript === 'undefined')
        return;

    function doNothing() {}
    var referrerExists = typeof(document.referrer) === 'string' && document.referrer  !== '';
    var allowed = referrerExists && window.history.length > 1;

    var searchInput = document.getElementById(mainSearchPortlet + mainSearchPredefParamNames);
    if (searchInput) {
        searchInput.setAttribute('maxlength', 255);
    }

    AUI().use('node', function(Y){
        var submitBut = Y.all(".lfr-search-button");

        submitBut.each(function(){
            this.on('click', function(){
                if(this.get('disabled') == false){
                    this.ancestor().addClass("disabled");
                }
            })
        });
    });

    if (allowed) {
        var backContainer = document.getElementById('backContainer');
        if (backContainer) {
            backContainer.style.display = 'inline';
        }
    }

});