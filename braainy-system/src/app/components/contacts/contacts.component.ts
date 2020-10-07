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
  // ELEMENT_DATA: any[]
  displayedColumns: string[] = ['accessCode','cityId','cityText','contactNo','countryId','createdTime','currencyId','defaultExpenseAccountId','defaultExpenseProductDescription','defaultTaxRateId','ean','emailAttachmentDeliveryMode','fax','id','isArchived','isCustomer','isSalesTaxExempt','isSupplier','localeId','name','organizationId','phone','registrationNo','stateId','stateText','street','type','zipcodeId','zipcodeText','paymentTermsDays','paymentTermsMode'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private ContactsService: ContactsService) { }
  ngOnInit() {
    this.ContactsService.getContacts().subscribe((res: any) => {
      console.log(res)
      this.dataSource = new MatTableDataSource<any>(res.contacts)
      this.dataSource.paginator = this.paginator;
    })
  }
}




