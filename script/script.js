var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  // console.log('Latitude : ' + crd.latitude);
  // console.log('Longitude: ' + crd.longitude);
  // console.log('More or less ' + crd.accuracy + ' meters.');
  $("js-lat").text(crd.latitude);
  $().text(crd.longitude);
  $().text(crd.accuracy);
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);