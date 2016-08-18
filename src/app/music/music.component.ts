import { Component } from '@angular/core';
import SpotifyService from 'angular2-spotify/angular2-spotify';
import {PlaylistNameFilterPipe} from "./playlist-name.pipe";
import {TrackNameFilterPipe} from "./track-name.filter";
import {PlaylistOwnerFilterPipe} from "./playlist-owner.pipe";
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-music',
  templateUrl: 'music.component.html',
  styleUrls: ['music.component.css'],
  pipes: [PlaylistNameFilterPipe, TrackNameFilterPipe, PlaylistOwnerFilterPipe]
})
export class MusicComponent {
  private user: Object;
  private userId: string;
  private playlists: Object;
  private playlistId: Object;
  private trackList: Object;
  private playlistOwner: Object;
  private showTrackList: boolean;
  private showTrackPlayer: boolean;
  private trackId: string;
  private trackUrl: SafeResourceUrl;
  private visible: boolean;
  private displayIcon: string;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizationService) {
    this.visible = true;
    this.displayIcon = 'fa fa-plus-circle';
  }

  login() {
    this.spotifyService.login().subscribe(

      token => {
        this.spotifyService.getCurrentUser()
          .subscribe(data=> { this.userId = data.id, this.user = data},
            err=> console.error(err));

      },
      err => console.error(err),
      () => { });
  }

  getPlaylists(userId: string) {
    this.spotifyService.getUserPlaylists(userId, {limit: 50}).subscribe(
      data => {
        this.playlists = data;
        this.playlistOwner = data.items.name;
      }
    )
  }


  getTrackList(id: string, user: string) {
    this.spotifyService
      .getPlaylistTracks(user, id)
      .subscribe(data => {

        this.trackList = data;
        this.playlistId = id;
        this.showTrackList = !this.showTrackList;
        this.visible = !this.visible;
        this.displayIcon = this.visible ? 'fa fa-plus-circle' : 'fa fa-minus-circle';
      });

  }

  playTrack(id: string) {
    this.trackId = id;
    this.trackUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://embed.spotify.com/?uri=spotify%3Atrack%3A' + id);
    this.showTrackPlayer = true;
  }

  closePlayer() {
    this.showTrackPlayer = false;
  }
}