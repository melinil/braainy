import { Component } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  productName: string;
  productDescription: string;
  productNo: string;
  suppProdNp: string;
  prodSalesTax: string;
  selected: boolean;
  newProduct: Product = {};
  showSpinner: boolean = false;
  organizationId: string = Constants.organizationId;
  accountId: string = Constants.accountId;

  constructor(private productsService: ProductsService) { }

  createProduct() {
    this.showSpinner = true;
    this.updateObject();
    this.productsService.createProduct(this.newProduct).subscribe(res => this.showSpinner = false);
  }

  updateObject() {
    if (this.organizationId && this.productName && this.accountId) {
      this.newProduct.organizationId = this.organizationId;
      this.newProduct.name = this.productName;
      this.newProduct.description = this.productDescription;
      this.newProduct.accountId = this.accountId;
      this.newProduct.productNo = this.productNo;
      this.newProduct.suppliersProductNo = this.suppProdNp;
      this.newProduct.salesTaxRulesetId = this.prodSalesTax;
      this.newProduct.isArchived = this.selected;
    } else {
      console.log('Please fill in all required fields');
    }
  }
}