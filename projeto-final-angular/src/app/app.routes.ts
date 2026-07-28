import { Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome';
import { PromiseAndThenComponent } from './components/promise-and-then/promise-and-then';
import { PromiseAsyncAwaitComponent } from './components/promise-async-await/promise-async-await';
import { ObservablePipeasyncComponent } from './components/observable-pipeasync/observable-pipeasync';
import { ObservableWithSubscriptionComponent } from './components/observable-with-subscription/observable-with-subscription';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'promise-and-then',
    component: PromiseAndThenComponent
  },
  {
    path: 'promise-async-await',
    component: PromiseAsyncAwaitComponent
  },
  {
    path: 'observable-pipeasync',
    component: ObservablePipeasyncComponent
  },
  {
    path: 'observable-with-subscription',
    component: ObservableWithSubscriptionComponent
  }
];