'use strict';

angular.module('parkLocator').factory('mapService', ['Flash', 'uiGmapGoogleMapApi',
  function (Flash, gMapsApi) {


  var mapsObj;

  gMapsApi.then( function (maps) {
    mapsObj = maps;
    map.searchbox.options.bounds = new mapsObj.LatLngBounds(new mapsObj.LatLng(35.437814,-78.984583), new mapsObj.LatLng(36.113561,-78.336890));
  });

  var raleighBounds = {
    northeast: {
      longitude: -78.336890,
      latitude: 36.113561
    },
    southwest: {
      latitude: 35.437814,
      longitude: -78.984583
    }
  };

  // Temporary coordinates while Geoloc gets us the user's coords
  var center = {
    latitude: 35.79741992502266, 
    longitude: -78.64118938203126,
    zoom: 14,
    autoDiscover: true
  };

  var map = {
  	// 1 to 20 - 20 being closely zoomed in
    zoom: 14,
    // turns to true when the map is being dragged
    dragging: false,
    // set to true to trigger a map refresh when necessary
    refresh: false,
    pan: false,
    center: center,
    maxbounds: raleighBounds,
    control: {},
    defaults: {
      scrollWheelZoom: false
    },
    options: {}
  };

  map.markersConfig = {
    type: 'cluster',
    typeOptions: {
      title: 'Zoom in to find more parks!',
      gridSize: 60,
      minimumClusterSize: 3
    },
    typeEvents: {}
  };

  map.markersConfig.typeOptions.styles = [{textColor: '#FFF',textSize: 18,fontFamily: 'Roboto, Helvetica, Verdana, sans-serif',anchorText: [5, -5],url: '/img/icons/park-marker-cluster.svg',height: 40,width: 40},{textColor: '#FFF',textSize: 18,fontFamily: 'Roboto, Helvetica, Verdana, sans-serif',anchorText: [5, -5],url: '/img/icons/park-marker-cluster.svg',height: 44,width: 44},{textColor: '#FFF',textSize: 18,fontFamily: 'Roboto, Helvetica, Verdana, sans-serif',anchorText: [5, -5],url: '/img/icons/park-marker-cluster.svg',height: 48,width: 48},{textColor: '#FFF',textSize: 18,fontFamily: 'Roboto, Helvetica, Verdana, sans-serif',anchorText: [5, -5],url: '/img/icons/park-marker-cluster.svg',height: 52,width: 52},{textColor: '#FFF',textSize: 18,fontFamily: 'Roboto, Helvetica, Verdana, sans-serif',anchorText: [5, -5],url: '/img/icons/park-marker-cluster.svg',height: 56,width: 56}];

  // Light blues and greys 
  map.options.secondaryStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#b5cbe4'}]},{'featureType':'landscape','stylers':[{'color':'#efefef'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#83a5b0'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#bdcdd3'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#e3eed3'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}];

  // Marker for current location (Geolocation or default)
  map.myLocationMarker = {
    id: 0,
    coords: { latitude: center.latitude, longitude: center.longitude },
    options: {
      draggable: false,
      clickable: false,
      icon: 'https://s3.amazonaws.com/davidmeza/Park_Locator/user.png',
    },
  };

  // Get our map instance when it loads
  map.events = {
    tilesloaded: function () {
      map.mapInstance = map.control.getGMap();
    }
  };

  // Search box
  map.searchbox = {
    template: 'views/partials/search-box.html',
    position: 'TOP_RIGHT',
    options: {
    },
    events: {
      places_changed: function (searchBox) {
        var loc = searchBox.getPlaces()[0].geometry.location;
        moveToPos(loc.lat(), loc.lng());
	    }
	  }
  };

	var _isInRaleigh = function (lat, lon) {
    // Test Raleigh address: 35.7776464, -78.63844279999999
    return lat < 36.113561 && lat > 35.437814 && lon < -78.336890 && lon > -78.984583;
  };

  var updateUserCoords = function (lat, lon) {
    // Update the location obj with the accurate user coords
    map.center.latitude = lat;
    map.center.longitude = lon;
    map.myLocationMarker.coords.latitude = lat;
    map.myLocationMarker.coords.longitude = lon;
    map.zoom = 14;
    if (!_isInRaleigh(lat, lon)) {
      // Otherwise, keep using default coordinates
      var message = '<strong><i class = "fa fa-fw fa-exclamation-circle"></i> </strong>  It seems this location is not in Raleigh.';
      Flash.create('warning', message);
    }
  };

  var moveToPos = function (lat, lon) {
    // if (!_isInRaleigh(lat,lon)) { return updateUserCoords(lat,lon); }
    map.center.latitude = lat;
    map.center.longitude = lon;
    map.zoom = 16;
  };

  return {
    map: map,
    updateUserCoords: updateUserCoords,
  };

}]);