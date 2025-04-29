import { Routes } from '@angular/router';
import { LearnNgContentComponent } from './tutorials/learn-ng-content/learn-ng-content.component';

export const routes: Routes = [
  {
    path: 'learn-ng-content', // No leading slash needed here
    component: LearnNgContentComponent,
  },
];
