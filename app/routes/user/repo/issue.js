import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let user = this.modelFor('user').login;
    let repo = this.modelFor('user.repo').name;

    return $.getJSON(`https://api.github.com/repos/${user}/${repo}/issues/${params.issue_number}`);
  },
  afterModel(issue) {
    let user = this.modelFor('user').login;
    let repo = this.modelFor('user.repo').name;
    return $.getJSON(`https://api.github.com/repos/${user}/${repo}/issues/${issue.number}/comments`).then(comments => {
      issue.comments = comments;
    });
  }
});