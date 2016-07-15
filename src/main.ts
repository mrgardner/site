import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from "@angular/http";

  enableProdMode();


bootstrap(AppComponent, [HTTP_PROVIDERS]);

