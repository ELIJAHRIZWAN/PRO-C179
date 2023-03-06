let latitude, longitude, destination;

$(document).ready(function() {
	alert("Please allow the device to know your location!")
	initGeoLocation();
})

function initGeoLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coord.latitude
}


// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});   

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	
);

var img1 = document.querySelector("#amber")

//Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
	element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

   