_satellite.pushBlockingScript(function(event, target, $variables){
  _satellite.notify('LAYERING LOGIC: START');
var layersVisible = !!_satellite.getVar('layersVisible');
_satellite.notify('LAYERING LOGIC: _satellite.getVar(\'layersVisible\'): [' + layersVisible + ']');
_satellite.notify('LAYERING LOGIC: END');
});
