import { provideRouter, RouterConfig } from "@angular/router";

import { MusicComponent } from "./music/music.component";
import { HomeComponent } from "./home/home.component";
import {SteamComponent} from "./steam/steam.component";

const APP_ROUTES: RouterConfig = [
  { path: 'music', component: MusicComponent },
  { path: 'steam', component: SteamComponent },
  { path: '', component: HomeComponent },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
