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
  		$('.js-wind').text(data.currently.windSpeed + ' km/h');
  	}
  });

  $.ajax({
  	url: 'https://maps.googleapis.com/maps/api/geocode/json',
  	
  	data: {
  		latlng: crd.latitude + ',' + crd.longitude,
  		senseon: true

  	},
  	success: function(data) {
  		console.log(data);
  		$('.js-addr').text(data.results[0].formatted_address);
  	}
  });



};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

$.ajax({
  url: 'http://maps.googleapis.com/mas/api/geocode/json',
  data: {
    address: 'Hintere Bahnhofstrasse 85, 5000+Aarau',
    sensor: false
  },
  success: function(data){
    console.log(data);
  }

});





