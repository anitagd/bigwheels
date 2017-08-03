class GoogleMaps {

  constructor(element, options) {
    this.element = element;

    this.init(options);

    this.onResize = this.onResize.bind(this);
    this.addEventListeners();
  }

  init(options) {
    this.map = new google.maps.Map(document.querySelector(this.element), options);
  }

  renderMap(options) {
    this.map.setCenter({
      lat: options.lat,
      lng: options.lng
    });
  }

  renderMarkers(locations) {
    const { map } = this;
    const infoWindow = new google.maps.InfoWindow();

    this.markers = locations.map(location => {
      const marker = new google.maps.Marker(location);

      if (location.infoWindow) {
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.setContent(location.infoWindow.content);
          infoWindow.open(map, marker);
        });
      }

      return marker;
    });
  }

  renderMarkerClusterer(options) {
    new MarkerClusterer(this.map, this.markers, options);
  }

  renderRectangle(options) {
    const rectangle = new google.maps.Rectangle(options);

    rectangle.setMap(this.map);
  }

  onResize() {
    const { map } = this;
    const center = map.getCenter();

    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize);
  }

}

const data = [
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/albania.png",
    "infoWindow": {
      "content": "<h2>Albania</h2>"
    },
    "position": {
      "lat": 41.1533,
      "lng": 20.1683
    },
    "title": "Albania"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/andorra.png",
    "infoWindow": {
      "content": "<h2>Andorra</h2>"
    },
    "position": {
      "lat": 42.5063,
      "lng": 1.5218
    },
    "title": "Andorra"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/austria.png",
    "infoWindow": {
      "content": "<h2>Austria</h2>"
    },
    "position": {
      "lat": 47.5162,
      "lng": 14.5501
    },
    "title": "Austria"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/belarus.png",
    "infoWindow": {
      "content": "<h2>Belarus</h2>"
    },
    "position": {
      "lat": 53.7098,
      "lng": 27.9534
    },
    "title": "Belarus"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/belgium.png",
    "infoWindow": {
      "content": "<h2>Belgium</h2>"
    },
    "position": {
      "lat": 50.5039,
      "lng": 4.4699
    },
    "title": "Belgium"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/bosniaherzegowina.png",
    "infoWindow": {
      "content": "<h2>Bosnia and Herzegovina</h2>"
    },
    "position": {
      "lat": 43.9159,
      "lng": 17.6791
    },
    "title": "Bosnia and Herzegovina"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/bulgaria.png",
    "infoWindow": {
      "content": "<h2>Bulgaria</h2>"
    },
    "position": {
      "lat": 42.7339,
      "lng": 25.4858
    },
    "title": "Bulgaria"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/croatia.png",
    "infoWindow": {
      "content": "<h2>Croatia</h2>"
    },
    "position": {
      "lat": 45.1000,
      "lng": 15.2000
    },
    "title": "Croatia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/cyprus.png",
    "infoWindow": {
      "content": "<h2>Cyprus</h2>"
    },
    "position": {
      "lat": 35.1264,
      "lng": 33.4299
    },
    "title": "Cyprus"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/czechrepublic.png",
    "infoWindow": {
      "content": "<h2>Czech Republic</h2>"
    },
    "position": {
      "lat": 49.8175,
      "lng": 15.4730
    },
    "title": "Czech Republic"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/denmark.png",
    "infoWindow": {
      "content": "<h2>Denmark</h2>"
    },
    "position": {
      "lat": 56.2639,
      "lng": 9.5018
    },
    "title": "Denmark"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/estonia.png",
    "infoWindow": {
      "content": "<h2>Estonia</h2>"
    },
    "position": {
      "lat": 58.5953,
      "lng": 25.0136
    },
    "title": "Estonia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/finland.png",
    "infoWindow": {
      "content": "<h2>Finland</h2>"
    },
    "position": {
      "lat": 61.9241,
      "lng": 25.7482
    },
    "title": "Finland"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/france.png",
    "infoWindow": {
      "content": "<h2>France</h2>"
    },
    "position": {
      "lat": 46.2276,
      "lng": 2.2137
    },
    "title": "France"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/germany.png",
    "infoWindow": {
      "content": "<h2>Germany</h2>"
    },
    "position": {
      "lat": 51.1657,
      "lng": 10.4515
    },
    "title": "Germany"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/greece.png",
    "infoWindow": {
      "content": "<h2>Greece</h2>"
    },
    "position": {
      "lat": 39.0742,
      "lng": 21.8243
    },
    "title": "Greece"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/hungary.png",
    "infoWindow": {
      "content": "<h2>Hungary</h2>"
    },
    "position": {
      "lat": 47.1625,
      "lng": 19.5033
    },
    "title": "Hungary"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/iceland.png",
    "infoWindow": {
      "content": "<h2>Iceland</h2>"
    },
    "position": {
      "lat": 65.003605,
      "lng": -18.683089
    },
    "title": "Iceland"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/ireland.png",
    "infoWindow": {
      "content": "<h2>Ireland</h2>"
    },
    "position": {
      "lat": 53.350140,
      "lng": -6.266155
    },
    "title": "Ireland"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/italy.png",
    "infoWindow": {
      "content": "<h2>Italy</h2>"
    },
    "position": {
      "lat": 41.8719,
      "lng": 12.5674
    },
    "title": "Italy"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/kazakhstan.png",
    "infoWindow": {
      "content": "<h2>Kazakhstan</h2>"
    },
    "position": {
      "lat": 48.0196,
      "lng": 66.9237
    },
    "title": "Kazakhstan"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/kosovo.png",
    "infoWindow": {
      "content": "<h2>Kosovo</h2>"
    },
    "position": {
      "lat": 42.6026,
      "lng": 20.9030
    },
    "title": "Kosovo"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/latvia.png",
    "infoWindow": {
      "content": "<h2>Latvia</h2>"
    },
    "position": {
      "lat": 56.8796,
      "lng": 24.6032
    },
    "title": "Latvia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/lichtenstein.png",
    "infoWindow": {
      "content": "<h2>Lichtenstein</h2>"
    },
    "position": {
      "lat": 47.141,
      "lng": 9.521
    },
    "title": "Lichtenstein"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/lithuania.png",
    "infoWindow": {
      "content": "<h2>Lithuania</h2>"
    },
    "position": {
      "lat": 55.1694,
      "lng": 23.8813
    },
    "title": "Lithuania"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/luxembourg.png",
    "infoWindow": {
      "content": "<h2>Luxembourg</h2>"
    },
    "position": {
      "lat": 49.6116,
      "lng": 6.1319
    },
    "title": "Luxembourg"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/malta.png",
    "infoWindow": {
      "content": "<h2>Malta</h2>"
    },
    "position": {
      "lat": 35.9375,
      "lng": 14.3754
    },
    "title": "Malta"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/macedonia.png",
    "infoWindow": {
      "content": "<h2>Macedonia</h2>"
    },
    "position": {
      "lat": 41.6086,
      "lng": 21.7453
    },
    "title": "Macedonia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/moldova.png",
    "infoWindow": {
      "content": "<h2>Moldova</h2>"
    },
    "position": {
      "lat": 47.4116,
      "lng": 28.3699
    },
    "title": "Moldova"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/monaco.png",
    "infoWindow": {
      "content": "<h2>Monaco</h2>"
    },
    "position": {
      "lat": 43.7384,
      "lng": 7.4246
    },
    "title": "Monaco"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/montenegro.png",
    "infoWindow": {
      "content": "<h2>Montenegro</h2>"
    },
    "position": {
      "lat": 42.7087,
      "lng": 19.3744
    },
    "title": "Montenegro"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/netherlands.png",
    "infoWindow": {
      "content": "<h2>Netherlands</h2>"
    },
    "position": {
      "lat": 52.1326,
      "lng": 5.2913
    },
    "title": "Netherlands"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/norway.png",
    "infoWindow": {
      "content": "<h2>Norway</h2>"
    },
    "position": {
      "lat": 60.4720,
      "lng": 8.4689
    },
    "title": "Norway"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/poland.png",
    "infoWindow": {
      "content": "<h2>Poland</h2>"
    },
    "position": {
      "lat": 51.9194,
      "lng": 19.1451
    },
    "title": "Poland"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/portugal.png",
    "infoWindow": {
      "content": "<h2>Portugal</h2>"
    },
    "position": {
      "lat": 38.736946,
      "lng": -9.142685
    },
    "title": "Portugal"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/romania.png",
    "infoWindow": {
      "content": "<h2>Romania</h2>"
    },
    "position": {
      "lat": 45.9432,
      "lng": 24.9668
    },
    "title": "Romania"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/russia.png",
    "infoWindow": {
      "content": "<h2>Russia</h2>"
    },
    "position": {
      "lat": 61.5240,
      "lng": 105.3188
    },
    "title": "Russia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/sanmarino.png",
    "infoWindow": {
      "content": "<h2>San Marino</h2>"
    },
    "position": {
      "lat": 43.9424,
      "lng": 12.4578
    },
    "title": "San Marino"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/serbia.png",
    "infoWindow": {
      "content": "<h2>Serbia</h2>"
    },
    "position": {
      "lat": 44.0165,
      "lng": 21.0059
    },
    "title": "Serbia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/slovakia.png",
    "infoWindow": {
      "content": "<h2>Slovakia</h2>"
    },
    "position": {
      "lat": 48.6690,
      "lng": 19.6990
    },
    "title": "Slovakia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/slovenia.png",
    "infoWindow": {
      "content": "<h2>Slovenia</h2>"
    },
    "position": {
      "lat": 46.1512,
      "lng": 14.9955
    },
    "title": "Slovenia"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/spain.png",
    "infoWindow": {
      "content": "<h2>Spain</h2>"
    },
    "position": {
      "lat": 40.417485,
      "lng": -3.711130
    },
    "title": "Spain"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/sweden.png",
    "infoWindow": {
      "content": "<h2>Sweden</h2>"
    },
    "position": {
      "lat": 62.925494,
      "lng": 16.880016
    },
    "title": "Sweden"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/switzerland.png",
    "infoWindow": {
      "content": "<h2>Switzerland</h2>"
    },
    "position": {
      "lat": 46.8182,
      "lng": 8.2275
    },
    "title": "Switzerland"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/turkey.png",
    "infoWindow": {
      "content": "<h2>Turkey</h2>"
    },
    "position": {
      "lat": 38.9637,
      "lng": 35.2433
    },
    "title": "Turkey"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/ukraine.png",
    "infoWindow": {
      "content": "<h2>Ukraine</h2>"
    },
    "position": {
      "lat": 48.3794,
      "lng": 31.1656
    },
    "title": "Ukraine"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/unitedkingdom.png",
    "infoWindow": {
      "content": "<h2>United Kingdom</h2>"
    },
    "position": {
      "lat": 51.509865,
      "lng": -0.118092
    },
    "title": "United Kingdom"
  },
  {
    "icon": "https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/europe/vaticancity.png",
    "infoWindow": {
      "content": "<h2>Vatican City</h2>"
    },
    "position": {
      "lat": 41.9029,
      "lng": 12.4534
    },
    "title": "Vatican City"
  }
];

const googleMaps = new GoogleMaps('.js-google-maps', {
  center: {
    lat: 49.718364,
    lng: 12.687261
  },
  zoom: 5
});

navigator.geolocation.getCurrentPosition(position => {
  googleMaps.renderMap({
    lat: position.coords.latitude,
    lng: position.coords.longitude
  })
}, error => {
  throw new Error(error);
}, {
  enableHighAccuracy: true,
  maximumAge: 0
});

// fetch('path/to/locations.json')
//   .then(response => response.json())
//   .then(data => {
//     googleMaps.renderMarkers(data);
//     googleMaps.renderMarkerClusterer({
//       imagePath: 'https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/m'
//     });
//     googleMaps.renderRectangle({
//       bounds: new google.maps.LatLngBounds(
//         {
//           lat: -90,
//           lng: -180
//         },
//         {
//           lat: 90,
//           lng: 180
//         }
//       ),
//       fillColor: '#000',
//       fillOpacity: 0.3
//     });
//   });

googleMaps.renderMarkers(data);
    googleMaps.renderMarkerClusterer({
      imagePath: 'https://cdn.rawgit.com/marcobiedermann/playground/master/ui/map/google-maps/google-maps-marker/source/content/images/m'
    });
    googleMaps.renderRectangle({
      bounds: new google.maps.LatLngBounds(
        {
          lat: -90,
          lng: -180
        },
        {
          lat: 90,
          lng: 180
        }
      ),
      fillColor: '#000',
      fillOpacity: 0.3
    });