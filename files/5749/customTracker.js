if (uioGaCheck.shouldRunGA()) {

  // Should be loaded in head
  // analytics.js must already have been loaded
  // uioGa.js must already have been loaded

  // PRODUCTION all official UiO hosts
  ga('create', 'UA-64548311-1', {'name': 'uioFellesTracker', 'cookieName': '_gaT01UiOAgg', 'legacyHistoryImport': false, 'cookieDomain': 'uio.no' });
  ga('create', 'UA-64546224-1', {'name': 'uioFelles50Tracker', 'sampleRate': 50, 'cookieName': '_gaT01UiOAgg', 'legacyHistoryImport': false, 'cookieDomain': 'uio.no' });

  // PRODUCTION current host
  ga('create', 'UA-64548311-14', {'name': 'svTracker', 'cookieName': '_gaT01SV', 'legacyHistoryImport': false, 'cookieDomain': 'sv.uio.no' });

  // Will only execute when everything needed by ga is set up (Asynchronous Synchronization)
  ga(function () {
    uioGa.initForProduction();
    uioGa.tryEarlyPageView();
  });

}
