import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Settings } from 'luxon';


Settings.defaultLocale = 'pt-PT';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
