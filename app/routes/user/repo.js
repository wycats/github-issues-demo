import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let user = this.modelFor('user').login;

    return $.getJSON(`https://api.github.com/repos/${user}/${params.repo_name}`);
  },

  afterModel(repo) {
    let user = this.modelFor('user').login;
    return $.getJSON(`https://api.github.com/repos/${user}/${repo.name}/issues?per_page=100`).then(issues => {
      repo.issues = issues;
    });
  }
});