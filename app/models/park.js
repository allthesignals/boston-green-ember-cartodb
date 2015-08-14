import DS from 'ember-data';

export default DS.Model.extend({
	properties: DS.attr(''),
	geometry: DS.attr(''),
	type: DS.attr('string'),
	geojson: function() {
		return {
				type: this.get('type'),
				geometry: this.get('geometry'),
				properties: this.get('properties')
			};
	}.property('type', 'geometry', 'properties'),

	name: function() {
		return this.get('properties').name;
	}.property('name')
});
