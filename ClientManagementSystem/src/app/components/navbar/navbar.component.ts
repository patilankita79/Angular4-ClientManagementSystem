import { timeout } from 'rxjs/operator/timeout';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  // setting to enable the registration
  showRegister: boolean;

  constructor(private flashMessagesService: FlashMessagesService,
              private router: Router,
              private authService: AuthService,
              public settingsService: SettingsService
              ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      // If user is logged in
      if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logOut();
    this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success', timeout: 4000});

    // Navigate to login page
    this.router.navigate(['/login']);
  }

}
