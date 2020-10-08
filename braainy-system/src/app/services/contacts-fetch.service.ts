import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Contact from '../models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  url: string = "https://api.billysbilling.com/v2"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34' })
  };

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.url + '/contacts', this.httpOptions);
  }

  createContact(newContact: Contact) {
    return this.http.post(this.url + '/contacts', {contact: newContact}, this.httpOptions);
  }
}
