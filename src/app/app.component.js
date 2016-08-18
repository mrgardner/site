"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var music_component_1 = require('./music/music.component');
var angular2_spotify_1 = require('angular2-spotify/angular2-spotify');
var header_component_1 = require("./header/header.component");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [music_component_1.MusicComponent, header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
            providers: [
                angular2_spotify_1["default"],
                core_1.provide("SpotifyConfig", {
                    useValue: {
                        clientId: '8533e022572d49caa870cfb4fb5c6e90',
                        redirectUri: 'http://localhost:4200/callback.html',
                        // redirectUri: 'https://mrgardner.github.io/site/callback.html',
                        scope: 'user-read-private',
                        // If you already have an authToken
                        authToken: localStorage.getItem('spotify-token')
                    }
                })
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map