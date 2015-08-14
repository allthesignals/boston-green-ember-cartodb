import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.map = L.map(this.$('#map').get(0));
    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);
    var geojson = L.geoJson(this.get("vector"));
    var bounds = geojson.getBounds();
    geojson.addTo(this.map);
    this.map.fitBounds(bounds);
  }
});
