import { timeout } from 'rxjs/operator/timeout';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  disableBalanceOnAdd:boolean = false;

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  
  constructor(public flashMessagesService: FlashMessagesService,
             public router: Router,
             public clientService: ClientService,
             public settingsService: SettingsService) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }
  
  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    console.log(value);

    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if(!valid) {
      console.log('Not Valid');
      this.flashMessagesService.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});

      // Redirect
      this.router.navigate(['/add-client']);

    } else {
      console.log('Valid');
      // Add new client
      this.clientService.newClient(value);
      this.flashMessagesService.show('New client is added', {cssClass: 'alert-success', timeout: 4000});

      // navigate to dashboard
      this.router.navigate(['/']);



      }
    }

  }

