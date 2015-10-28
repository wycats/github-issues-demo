import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.getJSON(`https://api.github.com/users/${params.username}`);
  },

  afterModel(user) {
    return $.getJSON(`https://api.github.com/users/${user.login}/repos?sort=pushed&direction=desc&per_page=100`).then(repos => {
      user.repos = repos;
    });
  }
});
