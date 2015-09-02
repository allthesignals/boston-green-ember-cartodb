import DS from 'ember-data';

export default DS.Model.extend({
	description: DS.attr('string'),
	owner: DS.attr('string'),
	address: DS.attr('string'),
	name: DS.attr('string'),
	area: DS.attr('string'),
	url: DS.attr('string'),
	access: DS.attr('string')
});
