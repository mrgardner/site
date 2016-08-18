import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SteamAPI {
  private baseUrl: string;
  private friendSubUrl: string;
  private apiKey: string;
  private steamId: string;
  private url: string;

  constructor(private http: Http) {
    this.baseUrl  = 'https://api.steampowered.com';
    this.apiKey = 'CE3B085E1B086B9EDC3EE903FE9F01CF';
    this.steamId = '76561197992462280';

  }

  getFriendList() {
    var friendSubUrl = '/ISteamUser/GetFriendList/v0001/?key=';
    var url = this.baseUrl+friendSubUrl+this.apiKey+'&steamid='+this.steamId+'&relationship=friend';

    this.http.get(url).subscribe(data => {
      console.log(data);
    }, error => console.log('Cannot load the Steam API'));
  }
}
