import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('parks', function() {
    this.resource('park', { path: '/:park_id' } );
  });
});

export default Router;
