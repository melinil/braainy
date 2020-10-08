import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from 'src/app/services/contacts-fetch.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['accessCode', 'cityId', 'cityText', 'contactNo', 'countryId', 'createdTime', 'currencyId', 'defaultExpenseAccountId', 'defaultExpenseProductDescription', 'defaultTaxRateId', 'ean', 'emailAttachmentDeliveryMode', 'fax', 'id', 'isArchived', 'isCustomer', 'isSalesTaxExempt', 'isSupplier', 'localeId', 'name', 'organizationId', 'phone', 'registrationNo', 'stateId', 'stateText', 'street', 'type', 'zipcodeId', 'zipcodeText', 'paymentTermsDays', 'paymentTermsMode'];
  dataSource;
  contactData: any[] = []
  showSpinner = true;
  searchValue: string = "";

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ContactsService: ContactsService) { }

  ngOnInit() {
    this.ContactsService.getContacts().subscribe((res: any) => {
      this.setDataSource(res.contacts)
      this.showSpinner = false;
      this.contactData = res.contacts
    })
  }
  onSearch(event) {
    let dataSourceData = this.contactData.filter(contact => contact.name.includes(event.target.value))
    this.setDataSource(dataSourceData)
  }
  setDataSource(data) {
    this.dataSource = new MatTableDataSource<any>(data)
    this.dataSource.paginator = this.paginator;
  }
}




