YUI().use('node', function (Y) {
    var basketSummaryPortlets = Y.all('.basket-summary-portlet');
    if (!basketSummaryPortlets || basketSummaryPortlets.size() == 0) {
        return;
    }
    var basketItems = [];
    basketSummaryPortlets.each(function() {
        var basketItemsNo = this.one('.basket-items .value');
        if(!basketItemsNo) {
            return;
        }

        basketItems[basketItems.length] = basketItemsNo;
    });

    if (basketItems.length == 0) {
        return;
    }

    basketItems = Y.Array(basketItems);

    Liferay.on("productAddedInBasketEvent", function(data) {
        basketItems.forEach(function(item, index) {
            var currentValue = parseInt(item.getHTML());
            currentValue++;
            item.setHTML(currentValue.toString());
        });
    });
    Liferay.on('productRemovedFromBasketEvent', function(data) {
        basketItems.forEach(function(item, index) {
            var currentValue = parseInt(item.getHTML());
            currentValue--;
            item.setHTML(currentValue.toString());
        });
    });
});