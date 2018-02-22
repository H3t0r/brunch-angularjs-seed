export const rootComponent = {
  template: `
    <div class="root">
      <div ui-view="app"></div>
    </div>
  `,
  controller: class RootComponent {
    constructor ($state) {
      'ngInject';

      this.$state = $state;
    }

    $onInit () {
      this.$state.go('app');
    }
  }
};
