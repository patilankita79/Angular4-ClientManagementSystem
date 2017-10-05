import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                public afAuth: AngularFireAuth) { }

    
    canActivate(): Observable<boolean> {
        // Check if the user is logged in
        return this.afAuth.authState.map(auth => {
            // Check for auth

            if (!auth) {
                // Redirect to login
                this.router.navigate(['/login']);
                return false;
            } else {
                // Because we are logged in and can visit this route
                return true;

            }

        });
    }
}
