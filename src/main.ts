import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTES_PROVIDER } from './app/app.routes';


  enableProdMode();


bootstrap(AppComponent, [APP_ROUTES_PROVIDER, HTTP_PROVIDERS]);

