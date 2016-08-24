import {Injectable} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2/angularfire2";

@Injectable()
export class UserService {

  item: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    this.item = af.database.object('/user');
  }

  createUser (data: any, username: string) {
    this.item = this.af.database.object(`/user/${username}`, { preserveSnapshot: true });
    this.item.update(data);
  }

  getAllUsers() {
    return this.item = this.af.database.object(`/user/`, { preserveSnapshot: true });
  }

  getUser (id: string) {
    return this.item = this.af.database.object(`/user/${id}`, { preserveSnapshot: true });
  }
}
