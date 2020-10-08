import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from 'src/app/services/contacts-fetch.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['Access Code', 'City ID', 'City', 'Contact No.', 'Country', 'Created Time', 'Currency', 'Expense Acc. ID', 'Expense Prod. Desc.', 'Tax Rate ID', 'EAN', 'Email Attachment Delivery Mode', 'Fax', 'ID', 'Archived', 'Customer', 'Tax Exempt', 'Supplier', 'Locale ID', 'Name', 'Org ID', 'Phone', 'Reg. No.', 'State ID', 'State Text', 'Street', 'Type', 'Zip ID', 'Zip Text', 'Payment Terms Days', 'Payment Terms Mode'];
  dataSource;
  selectedColumns: string[] = []
  contactData: any[] = []
  showSpinner = true;
  searchValue: string = "";
  columns = new FormControl();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ContactsService: ContactsService) { }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("selectedContactColumns"))) {
      this.selectedColumns = JSON.parse(sessionStorage.getItem("selectedContactColumns"))
    } else {
      this.selectedColumns = this.displayedColumns
    }
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

  onColumnChange(event) {
    this.selectedColumns = event.value
    sessionStorage.setItem("selectedContactColumns", JSON.stringify(this.selectedColumns))
  }
}




