function installSearchEngine() {
 if (window.external && ("AddSearchProvider" in window.external)) {
    // Firefox 2 and IE 7, OpenSearch
   window.external.AddSearchProvider("http://muse.jhu.edu/plugins/muse-opensearch.xml");
 } else if (window.sidebar && ("addSearchEngine" in window.sidebar)) {
   // Firefox <= 1.5, Sherlock
   window.sidebar.addSearchEngine("http://muse.jhu.edu/plugins/muse-sherlock.src",
                                  "http://muse.jhu.edu/plugins/muse-sherlock.png",
                                  "Project MUSE Search",
                                  "");
 } else {
   // No search engine support (IE 6, Opera, etc).
   alert("Your browser does not support search plugins");
 }
}
