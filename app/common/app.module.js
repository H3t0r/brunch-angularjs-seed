import uiRouter from '@uirouter/angularjs';
import { appComponent } from './app.component';

export const app = angular
  .module('app', [uiRouter])
  .component('app', appComponent)
  .config($stateProvider => {
    'ngInject';

    const state = {
      name: 'app',
      views: {
        app: 'app'
      }
    };

    $stateProvider.state(state);
  }).name;
