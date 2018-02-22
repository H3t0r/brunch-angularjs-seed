export const appComponent = {
  template: '<div ui-view></div>',
  controller: class AppComponent {
    constructor ($state) {
      'ngInject';

      this.$state = $state;
    }
  }
};
