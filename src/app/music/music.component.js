"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var playlist_name_pipe_1 = require("./playlist-name.pipe");
var track_name_filter_1 = require("./track-name.filter");
var playlist_owner_pipe_1 = require("./playlist-owner.pipe");
var MusicComponent = (function () {
    function MusicComponent(spotifyService, sanitizer) {
        this.spotifyService = spotifyService;
        this.sanitizer = sanitizer;
        this.visible = true;
        this.displayIcon = 'fa fa-plus-circle';
    }
    MusicComponent.prototype.login = function () {
        var _this = this;
        this.spotifyService.login().subscribe(function (token) {
            _this.spotifyService.getCurrentUser()
                .subscribe(function (data) { _this.userId = data.id, _this.user = data; }, function (err) { return console.error(err); });
        }, function (err) { return console.error(err); }, function () { });
    };
    MusicComponent.prototype.getPlaylists = function (userId) {
        var _this = this;
        this.spotifyService.getUserPlaylists(userId, { limit: 50 }).subscribe(function (data) {
            _this.playlists = data;
            _this.playlistOwner = data.items.name;
        });
    };
    MusicComponent.prototype.getTrackList = function (id, user) {
        var _this = this;
        this.spotifyService
            .getPlaylistTracks(user, id)
            .subscribe(function (data) {
            _this.trackList = data;
            _this.playlistId = id;
            _this.showTrackList = !_this.showTrackList;
            _this.visible = !_this.visible;
            _this.displayIcon = _this.visible ? 'fa fa-plus-circle' : 'fa fa-minus-circle';
        });
    };
    MusicComponent.prototype.playTrack = function (id) {
        this.trackId = id;
        this.trackUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://embed.spotify.com/?uri=spotify%3Atrack%3A' + id);
        this.showTrackPlayer = true;
    };
    MusicComponent.prototype.closePlayer = function () {
        this.showTrackPlayer = false;
    };
    MusicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-music',
            templateUrl: 'music.component.html',
            styleUrls: ['music.component.css'],
            pipes: [playlist_name_pipe_1.PlaylistNameFilterPipe, track_name_filter_1.TrackNameFilterPipe, playlist_owner_pipe_1.PlaylistOwnerFilterPipe]
        })
    ], MusicComponent);
    return MusicComponent;
}());
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map