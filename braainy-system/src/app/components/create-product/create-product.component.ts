import { Component, OnInit, ViewChild } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  // TODO Update var names
  productName: string;
  productDescription: string;
  productNo: string;
  suppProdNp: string;
  prodSalesTax: string;
  selected: boolean;
  newProduct: Product = {};
  showSpinner: boolean = false;
  //BELONGS TO
  organizationId: string;
  accountId: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { }

  createProduct() {
    this.showSpinner = true;
    this.updateObject()
    this.productsService.createProduct(this.newProduct).subscribe(res => console.log(res))
    this.showSpinner = false;
  }

  updateObject() {
    if (this.organizationId && this.productName && this.accountId) {
      this.newProduct.organizationId = "cwNMzNn1TOWhrYwyb6jdfA"
      this.newProduct.name = this.productName
      this.newProduct.description = this.productDescription
      this.newProduct.accountId = "sqEDsBlzSciIfOYh4t1QZQ"
      this.newProduct.productNo = this.productNo
      this.newProduct.suppliersProductNo = this.suppProdNp
      this.newProduct.salesTaxRulesetId = this.prodSalesTax
      this.newProduct.isArchived = this.selected
    } else {
      console.log("Please fill in all required fields")
    }
  }
}