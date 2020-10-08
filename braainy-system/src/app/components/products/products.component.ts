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
  displayedColumns: string[] = ['organization', 'name', 'description', 'account', 'prodNo', 'suppProdNo', 'salesTax', 'archived'];
  dataSource;
  productsData: any[] = []
  showSpinner = true;
  searchValue: string = "";

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    this.ProductsService.getProducts().subscribe((res: any) => {
      this.setDataSource(res.products)
      this.dataSource.sort = this.sort;
      this.showSpinner = false;
      this.productsData = res.products
    })
  }

  onSearch(event) {
    let dataSourceData = this.productsData.filter(product => product.name.includes(event.target.value))
    this.setDataSource(dataSourceData)
  }

  setDataSource(data) {
    this.dataSource = new MatTableDataSource<any>(data)
    this.dataSource.paginator = this.paginator;
  }
}

