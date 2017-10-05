import { Client } from '../models/Client';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {

    // Fetch client from database
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

   getClients() {
     return this.clients;
   }

   newClient(client: Client) {
     // Pushing Client object to clients which is a FirebaseListObservable
     this.clients.push(client);

   }

   getClient(id: string) {
     this.client = this.af.object('/clients/' + id) as FirebaseObjectObservable<Client>;

     return this.client;
   }

   updateClient(id: string,  client: Client) {
     return this.clients.update(id, client);

   }

   deleteClient(id: string) {
    return this.clients.remove(id);
   }

}
