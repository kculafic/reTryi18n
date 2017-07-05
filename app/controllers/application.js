import Ember from 'ember';
const { inject } = Ember;

export default Ember.Controller.extend({
  i18n: inject.service(),

  userName: 'Krsto',
  n: 0,

  actions: {
    setLocale(locale) {
      this.set('i18n.locale', locale);
    },

    showAlert(key) {
      const name = this.get('userName');
      const message = this.get('i18n').t(`alert.${key}`, { name: name });
      window.alert(message);
    },

    incrementN() {
      this.incrementProperty('n');
    },
  },
});
