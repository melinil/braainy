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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['Access Code', 'City ID', 'City', 'Contact No.', 'Country', 'Currency', 'Expense Acc. ID', 'Expense Prod. Desc.', 'Tax Rate ID', 'EAN', 'Email Attachment Delivery Mode', 'Fax', 'ID', 'Archived', 'Customer', 'Tax Exempt', 'Supplier', 'Locale ID', 'Name', 'Org ID', 'Phone', 'Reg. No.', 'State ID', 'State Text', 'Street', 'Type', 'Zip ID', 'Zip Text', 'Payment Terms Days', 'Payment Terms Mode'];
  selectedColumns: string[] = [];
  showSpinner: boolean = true;
  searchValue: string = "";
  dataSource: any;
  contactData: any[] = [];


  constructor(private ContactsService: ContactsService) { }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('selectedContactColumns'))) {
      this.selectedColumns = JSON.parse(sessionStorage.getItem('selectedContactColumns'));
    } else {
      this.selectedColumns = this.displayedColumns;
    }

    this.ContactsService.getContacts().subscribe((res: any) => {
      this.setDataSource(res.contacts);
      this.showSpinner = false;
      this.contactData = res.contacts;
    })
  }

  onSearch(event) {
    let dataSourceData = this.contactData.filter(contact => contact.name.includes(event.target.value));
    this.setDataSource(dataSourceData);
  }

  setDataSource(data) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
  }

  onColumnChange(event) {
    this.selectedColumns = event.value;
    sessionStorage.setItem('selectedContactColumns', JSON.stringify(this.selectedColumns));
  }
}




