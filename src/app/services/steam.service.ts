import {OnInit, Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SteamAPI implements OnInit {

  constructor(private http: Http) {}

  ngOnInit() {
  }

  getUser(id: string) {
    var proxyBase = 'https://crossorigin.me/';
    var urlBase = 'http://api.steampowered.com/';
    var apiKey = '4EC83A85E32BE750DD60CCB4DA20BA7F';
    var friendSub = 'ISteamUser/GetPlayerSummaries/v0002/?key=';
    var url = proxyBase+urlBase+friendSub+apiKey+'&steamids='+id;

    return this.http.get(url).map(res => res.json())
  }

  getFriendsList(steamId: string) {
     var proxyBase = 'https://crossorigin.me/';
      var urlBase = 'http://api.steampowered.com/';
      var apiKey = '4EC83A85E32BE750DD60CCB4DA20BA7F';
      var friendSub = 'ISteamUser/GetFriendList/v0001/?key=';
      // var steamId = '76561197992462280';
      var url = proxyBase+urlBase+friendSub+apiKey+'&steamid='+steamId+'&relationship=friend';
    return this.http.get(url).map(res => res.json())
  }
}
