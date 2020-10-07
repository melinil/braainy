import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';

// export interface PeriodicElement {
//   organization: string;
//   name: string;
//   description: string;
//   account: string;
//   productNo: string;
//   suppliersProductNo: string;
//   salesTaxRuleset: string;
//   isArchived: boolean;
//   prices: string;
// }


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: any[]
  displayedColumns: string[] = ['organization', 'name', 'description', 'account', 'prodNo', 'suppProdNo', 'salesTax', 'archived'];
  dataSource;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private productFetchService: ProductsFetchService) { }
  ngOnInit() {
    // this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    this.productFetchService.getProducts().subscribe((res: any) => {
      console.log(res)
      this.dataSource = new MatTableDataSource<any>(res.products)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {

  }
}

