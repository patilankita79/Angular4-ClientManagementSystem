import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate {

    constructor(private router: Router,
                public settingsService: SettingsService) { }

    
    canActivate(): boolean {
      
        // Check the setting
        if (this.settingsService.getSettings().allowRegistration) {
            // Don't block the route
            return true;
        } else {
            // Redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}
