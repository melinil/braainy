import { Component, OnInit, ViewChild } from '@angular/core';
interface Product {
  organization?: string;
  name?: string;
  description?: string;
  account?: string;
  productNo?: string;
  suppliersProductNo?: string;
  salesTaxRuleset?: string;
  prices?: string;
  isArchived?: boolean;
}
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  @ViewChild('matSelect') matSelect;
  productName
  productDescription
  productNo
  suppProdNp
  prodSalesTax
  selected
  newProduct: Product = {};
  constructor() { }

  ngOnInit(): void {

  }

  onClickMe() {
    console.log("Clicked")
  }
  createProduct() {
    this.updateObject()
  }

  updateObject() {
    this.newProduct.organization = "MyOrganization"
    this.newProduct.name = this.productName
    this.newProduct.description = this.productDescription
    this.newProduct.account = "MyAccount"
    this.newProduct.productNo = this.productNo
    this.newProduct.suppliersProductNo = this.suppProdNp
    this.newProduct.salesTaxRuleset = this.prodSalesTax
    this.newProduct.prices = "My org currency"
    this.newProduct.isArchived = this.selected
  }
}