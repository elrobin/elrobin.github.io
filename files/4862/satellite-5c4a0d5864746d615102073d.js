_satellite.pushAsyncScript(function(event, target, $variables){
  if (window.$) {
    $("#article_introduction > div > div > p:nth-child(2)").after("<div data-mboxid='nejm-article-inline' data-location='mbox' data-location-name='nejm-article-inline'></div>");

    adobe.target.getOffer({
        "mbox": "nejm-article-inline",
        "success": function(offer) {
            adobe.target.applyOffer({
                "mbox": "nejm-article-inline",
                "selector": "div[data-mboxid='nejm-article-inline']",
                "offer": offer
            });
        },
        "error": function(status, error) {
            console.log('Error', status, error);
        }
    });
}
});
