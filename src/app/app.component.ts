import { Component, provide } from '@angular/core';
import {MusicComponent} from './music/music.component';
import SpotifyService from 'angular2-spotify/angular2-spotify';
import {HeaderComponent} from "./header/header.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MusicComponent, HeaderComponent, ROUTER_DIRECTIVES],
  providers: [
    SpotifyService,
    provide("SpotifyConfig", {
      useValue: {
        clientId: '8533e022572d49caa870cfb4fb5c6e90',
        // redirectUri: 'http://localhost:4200/callback.html',
        redirectUri: 'https://mrgardner.github.io/site/callback.html',
        scope: 'user-read-private',
        // If you already have an authToken
        authToken: localStorage.getItem('spotify-token')
      }
    })
  ]
})
export class AppComponent {
  title = 'app works!';
}
