import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  i18n: Ember.inject.service()

});

Router.map(function() {
});

export default Router;
