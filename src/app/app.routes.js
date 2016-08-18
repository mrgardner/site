"use strict";
var router_1 = require("@angular/router");
var music_component_1 = require("./music/music.component");
var home_component_1 = require("./home/home.component");
var steam_component_1 = require("./steam/steam.component");
var APP_ROUTES = [
    { path: 'music', component: music_component_1.MusicComponent },
    { path: 'steam', component: steam_component_1.SteamComponent },
    { path: '', component: home_component_1.HomeComponent },
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map