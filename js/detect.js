"use strict";

if (bowser.chrome || bowser.chromium) {
  $('#addingToBrowser').text('Ajouter l\'extension à Chrome');
  if (chrome.app.isInstalled) {
    $('#addingToBrowser').text('Extension déjà ajoutée !');
    $('#tooltip-wrapper').tooltip({
      title: 'L\'extension est déjà installée sur votre navigateur. Vous pouvez la retrouver sur l\'adresse chrome://extensions ou dans Menu, Plus d\'outils puis Extensions',
      placement: 'bottom'
    });
    $('#addingToBrowser').prop("disabled", true);
  } else {
    $('#addingToBrowser').click(function() {
      chrome.webstore.install(undefined, function() {
        $('#addingToBrowser').text('Extension bien ajoutée !');
        $('#addingToBrowser').prop("disabled", true);
      }, function(msg) {
        console.log('Error :' + msg);
      });
    });
  };
} else if (bowser.firefox) {
  console.log('Firefox');
  if (bowser.check({ firefox: "49" })) {
    console.log('Supported');
  } else {
    console.log('Not supported');
  }
} else {
  // Not supported
  $('#addingToBrowser').text('Navigateur non supporté.');
  $('#tooltip-wrapper').tooltip({
    title: 'Votre navigateur n\'est pas supporté pour le moment. Seuls Chrome et Firefox sont disponibles. Versions Safari et Edge à venir.',
    placement: 'bottom'
  });
  $('#addingToBrowser').prop("disabled", true);
}