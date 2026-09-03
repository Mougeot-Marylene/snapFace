import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

registerLocaleData(fr.default);// ça enregistre dans l'appli la langue française

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
