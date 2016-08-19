import {Injectable} from "@angular/core";
// import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class UserService {

  constructor(){}

  createUser (data: any, username: string) {
    // var url = this.af.database.object('https://personal-site-85a8a.firebaseio.com');
    // console.log();
    // var dataRef = fireBase.child("user");
    // dataRef.child(username).update(data);
  }

  getAllUsers() {

  }

  getUser (id: string) {
    // var test = '';
    // fireBase.child('user').child(id).on("value", function (snapshot) {
    //   console.log(snapshot.val());
    //   console.log('return object');
    //   var data = snapshot.val();
    //   test = data.username;
    // });

    // return test;
  }
}
