var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  $('.js-lat').text(crd.latitude);
  $('.js-long').text(crd.longitude);
  $('.js-acc').text(crd.accuracy + ' Meter');

  $.ajax({
  	url: 'https://api.forecast.io/forecast/ab419d730e6a3a6d24ebd46eca0c1d57/' + crd.latitude + ',' + crd.longitude,
  	
  	data: {units : 'ca'},
  	dataType: 'jsonp',
  	success: function(data) {
  		console.log(data);
  		$('.js-temp').text(data.currently.apparentTemperature);
  		$('.js-wind').text(data.currently.windSpeed + 'km/h');
  	}
  });
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);