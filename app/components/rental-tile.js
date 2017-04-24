import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Yo Dawg, we heard you like deleting houses so we gon delete this one k? k.')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
