import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Contact from '../models/contact';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  url: string = Utils.url;
  httpOptions = Utils.httpOptions;

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.url + '/contacts', this.httpOptions);
  }

  createContact(newContact: Contact) {
    return this.http.post(this.url + '/contacts', { contact: newContact }, this.httpOptions);
  }
}
