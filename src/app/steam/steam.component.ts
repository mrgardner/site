import { Component, OnInit } from '@angular/core';
import {SteamAPI} from "../services/steam.service";
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Control, ControlGroup} from "@angular/common";

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
  private displayIcon: any[];
  private visible: boolean;
  private wrongCredentials: boolean;
  private myForm:FormGroup;


  constructor(private api: SteamAPI, private formBuilder:FormBuilder) {
    this.test = new Date();
    this.visible = true;
    this.wrongCredentials = false;

    this.myForm = formBuilder.group({
        'steamId': ['', [
          Validators.required,
          Validators.minLength(17),
          Validators.pattern('^(0|[0-9][0-9]*)$')
        ]],
      }
    );
  }

  ngOnInit() {

  }

  getUser(id: string) {
    var api = this.api.getUser(id);
    api.subscribe(
        data => {
          this.users = data.response.players;
          this.userId = id;
          this.showUser = !this.showUser;
          this.visible = !this.visible;

        },
        err => console.log(err));
  }

  getFriendsList(id: string) {
    var api = this.api.getFriendsList(id);
      api.subscribe(
        data => {
          console.log(data)
          this.displayIcon = new Array(data.total);
          for (var i=0; i < data.friendslist.friends.length; i++) {
            this.displayIcon[i] = 'fa fa-plus-circle';
          }

          this.friends = data.friendslist.friends;
          this.test = data.friendslist.friends.friend_since;
        },
        err => this.wrongCredentials = true);
  }

  toggleIcon (id: string) {
    if(this.displayIcon[id] == 'fa fa-minus-circle') {
      this.showUser = true;
      this.displayIcon[id] = 'fa fa-plus-circle';
    }
    else if (this.displayIcon[id] == 'fa fa-plus-circle') {
      this.showUser = false;
      this.displayIcon[id] = 'fa fa-minus-circle';
    }
  }

  validateTextLength (control: Control): {[s: string]: boolean} {
    if (control.value.length < 17 || control.value.length === 0) {
      return {invalidLength: true};
    }
  }

}
