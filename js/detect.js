"use strict";

if (bowser.chrome || bowser.chromium) {
  $('#addingToBrowser').text('Ajouter l\'extension à Chrome');
  if (chrome.app.isInstalled) {
    //console.log('Installé');
    $('#addingToBrowser').text('Extension déjà ajoutée !');
    $('#addingToBrowser').prop("disabled", true);
  } else {
    //console.log('Event');
    $('#addingToBrowser').click(function() {
      //console.log('Click');
      chrome.webstore.install(undefined, function() {
        //console.log('Success');
        $('#addingToBrowser').text('Extension bien ajoutée !');
        $('#addingToBrowser').prop("disabled", true);
      }, function(msg){
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
  console.log('Not supported');
}
//alert(JSON.stringify(bowser, null, '   '))