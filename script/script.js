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
  $('.js-lat').text(crd.latitude);
  $('.js-long').text(crd.longitude);
  $('.js-acc').text(crd.accuracy + ' Meter');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);