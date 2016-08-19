import { Component, OnInit } from '@angular/core';
import {SteamAPI} from "./steam.service";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-steam',
  templateUrl: 'steam.component.html',
  styleUrls: ['steam.component.css'],
  providers: [SteamAPI]
})
export class SteamComponent implements OnInit {

  private friends: Object;
  private users: Object
  private test: Date;
  private userId: string;
  private showUser: boolean;
  private displayIcon1: string;
  private visible: boolean;

  constructor(private api: SteamAPI, private http: Http) {
    this.test = new Date();
    this.visible = true;
  }

  ngOnInit() {

  }

  getUser(id: string) {
    var proxyBase = 'https://crossorigin.me/';
    var urlBase = 'http://api.steampowered.com/';
    var apiKey = '4EC83A85E32BE750DD60CCB4DA20BA7F';
    var friendSub = 'ISteamUser/GetPlayerSummaries/v0002/?key=';
    var url = proxyBase+urlBase+friendSub+apiKey+'&steamids='+id;
    console.log(url);
    this.http.get(url).map(res => res.json())
      .subscribe(
        data => {
          console.log();
          this.users = data.response.players;
          this.userId = id;
          this.showUser = !this.showUser;
          this.visible = !this.visible;
          this.displayIcon1 = this.visible ? 'fa fa-plus-circle' : 'fa fa-minus-circle';
        },
        err => console.log(err));
  }

  getFriendsList() {
    var proxyBase = 'https://crossorigin.me/';
    var urlBase = 'http://api.steampowered.com/';
    var apiKey = '4EC83A85E32BE750DD60CCB4DA20BA7F';
    var friendSub = 'ISteamUser/GetFriendList/v0001/?key=';
    var steamId = '76561197992462280';
    var url = proxyBase+urlBase+friendSub+apiKey+'&steamid='+steamId+'&relationship=friend';
    console.log(url);
    this.http.get(url).map(res => res.json())
      .subscribe(
        data => {
          this.friends = data.friendslist.friends;
          this.test = data.friendslist.friends.friend_since;

        },
        err => console.log(err));
  }

}
