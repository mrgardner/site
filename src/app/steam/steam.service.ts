import {OnInit, Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SteamAPI implements OnInit {

  private friends: Object[];

  constructor(private http: Http) {}

  ngOnInit() {
  }

  getUser() {
    var proxyBase = 'https://crossorigin.me/';
    var urlBase = 'http://api.steampowered.com/';
    var apiKey = '4EC83A85E32BE750DD60CCB4DA20BA7F';
    var friendSub = 'ISteamUser/GetPlayerSummaries/v0002/?key=';
    var steamId = '76561197992462280';
    var url = proxyBase+urlBase+friendSub+apiKey+'&steamids='+steamId;
    console.log(url);
    this.http.get(url).map(res => res.json())
      .subscribe(
        data => console.log(data),
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
          this.friends = data;
          console.log(this.friends);

        },
        err => console.log(err));
    console.log(this.friends);
    return this.friends;
  }

}
