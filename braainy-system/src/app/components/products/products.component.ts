import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['Organization', 'Name', 'Description', 'Account', 'Product No.', 'Supp. Product No.', 'Sales Tax', 'Archived'];
  selectedColumns: string[] = [];
  showSpinner: boolean = true;
  searchValue: string = '';
  dataSource: any;
  productsData: any[] = [];


  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('selectedProductColumns'))) {
      this.selectedColumns = JSON.parse(sessionStorage.getItem('selectedProductColumns'));
    } else {
      this.selectedColumns = this.displayedColumns;
    }

    this.ProductsService.getProducts().subscribe((res: any) => {
      this.setDataSource(res.products);
      this.dataSource.sort = this.sort;
      this.showSpinner = false;
      this.productsData = res.products;
    })
  }

  onSearch(event) {
    let dataSourceData = this.productsData.filter(product => product.name.includes(event.target.value));
    this.setDataSource(dataSourceData);
  }

  setDataSource(data) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
  }

  onColumnChange(event) {
    this.selectedColumns = event.value;
    sessionStorage.setItem('selectedProductColumns', JSON.stringify(this.selectedColumns));
  }
}

