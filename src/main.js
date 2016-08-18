"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require("@angular/http");
var app_routes_1 = require('./app/app.routes');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [app_routes_1.APP_ROUTES_PROVIDER, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map