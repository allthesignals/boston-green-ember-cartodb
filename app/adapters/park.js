import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://0.0.0.0:8000',
	findAll: function(store, type, label) {
		var url = '%@/parks/search'.fmt(this.host);
		console.log(url);
		return this.ajax(url, 'GET');
	}
});
