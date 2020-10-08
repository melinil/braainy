import { Component, OnInit } from '@angular/core';
import Contact from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contacts-fetch.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  zipcodeText: string
  cityText: string
  contactNo: string
  ean: string
  countryId: string
  name: string
  phone: string
  fax: string
  street: string
  stateText: string
  registrationNo: string
  type: string
  isArchived: boolean
  isCustomer: boolean
  isSalesTaxExempt: boolean
  isSupplier: boolean
  showSpinner: boolean = false;
  paymentTermsDays: number
  newContact: Contact = {};


  //check
  accessCode: string = "H6FRoslEBX7iOoVx"

  //BELONGS TO
  organizationId = "cwNMzNn1TOWhrYwyb6jdfA"
  cityId: string
  localeId: string
  zipcodeId: string
  stateId: string

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  createContact() {
    this.showSpinner = true
    this.updateContact()
    this.contactsService.createContact(this.newContact).subscribe(res => this.showSpinner = false)
  }

  updateContact() {
    if (this.organizationId && this.name && this.countryId && this.type) {
      this.newContact.zipcodeText = this.zipcodeText
      this.newContact.cityText = this.cityText
      this.newContact.contactNo = this.contactNo
      this.newContact.ean = this.ean
      this.newContact.countryId = this.countryId
      this.newContact.name = this.name
      this.newContact.phone = this.phone
      this.newContact.fax = this.fax
      this.newContact.street = this.street
      this.newContact.stateText = this.stateText
      this.newContact.registrationNo = this.registrationNo
      this.newContact.type = this.type
      this.newContact.isArchived = this.isArchived
      this.newContact.isCustomer = this.isCustomer
      this.newContact.isSalesTaxExempt = this.isSalesTaxExempt
      this.newContact.isSupplier = this.isSupplier
      this.newContact.paymentTermsDays = this.paymentTermsDays
      this.newContact.accessCode = this.accessCode
      this.newContact.organizationId = this.organizationId
      this.newContact.cityId = this.cityId
      this.newContact.localeId = this.localeId
      this.newContact.zipcodeId = this.zipcodeId
      this.newContact.stateId = this.stateId
    } else {
      console.log("Please fill in all rquired fields")
    }
  }

}
