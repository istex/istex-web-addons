"use strict";

if (bowser.chrome || bowser.chromium) {
  console.log('Chrome');
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