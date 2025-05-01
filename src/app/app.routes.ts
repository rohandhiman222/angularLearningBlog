import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DocsComponent } from './pages/docs/docs.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { LearnNgContentComponent } from './topics/learn-ng-content/learn-ng-content.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'post-details/:slug',
    component: PostDetailsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'learn-ng-content', // No leading slash needed here
    component: LearnNgContentComponent,
  },
];
