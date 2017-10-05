import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  // login user
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  // Check user status
  getAuth() {
    // returns an observable to get a user data - wether the user is logged in or not
    return this.afAuth.authState.map(auth => auth);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

}
