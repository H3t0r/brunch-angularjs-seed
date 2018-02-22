import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { rootComponent } from './root.component';
import { common } from './common/common.module';
import { components } from './components/components.module';

export const root = angular
  .module('root', [uiRouter, common, components])
  .component('root', rootComponent).name;
