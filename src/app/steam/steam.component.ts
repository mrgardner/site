import { Component, OnInit } from '@angular/core';
import {SteamAPI} from "./steamAPI.service";

@Component({
  moduleId: module.id,
  selector: 'app-steam',
  templateUrl: 'steam.component.html',
  styleUrls: ['steam.component.css'],
  providers: [SteamAPI]
})
export class SteamComponent implements OnInit {

  constructor(private api: SteamAPI) {
    api.getFriendList();
  }

  ngOnInit() {
  }





}
