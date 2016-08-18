"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SteamComponent = (function () {
    function SteamComponent(http) {
        this.http = http;
        var test = http.get('https://google.com');
        console.log(test);
    }
    SteamComponent.prototype.ngOnInit = function () {
    };
    SteamComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-steam',
            templateUrl: 'steam.component.html',
            styleUrls: ['steam.component.css']
        })
    ], SteamComponent);
    return SteamComponent;
}());
exports.SteamComponent = SteamComponent;
//# sourceMappingURL=steam.component.js.map