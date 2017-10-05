import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string;

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnEdit: boolean = true;

  constructor(public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService,
    public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     // Get client
     this.clientService.getClient(this.id).subscribe(
       client => {
         this.client = client;
       }
     );

     this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    console.log(value);
    
    if (!valid) {
      this.flashMessagesService.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});

      // Reload the page
      this.router.navigate(['/edit-client/' + this.id]);

    } else {
      // Update the client
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client is updated', {cssClass: 'alert-success', timeout: 4000});

      // navigate back to same client
      this.router.navigate(['/client/' + this.id]);

      }
    }

}
