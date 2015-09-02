import DS from 'ember-data';
// import CartoDBAdapter from 'bower_components/ember-cartodb-adapter/ember-cartodb-adapter.js';


export default DS.RESTAdapter.extend({
	host: 'http://0.0.0.0:8000'
});
