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
  alertMessage: string = '';
  alertClass: string;
  selected: boolean;
  newProduct: Product = {};
  showSpinner: boolean = false;
  organizationId: string = Constants.organizationId;
  accountId: string = Constants.accountId;

  constructor(private productsService: ProductsService) { }

  createProduct() {
    if (this.organizationId && this.productName && this.accountId) {
      this.showSpinner = true;
      this.updateObject();
    } else {
      this.alertClass = 'error-message';
      this.alertMessage = 'Please fill in all rquired fields!';
      return;
    }
    this.productsService.createProduct(this.newProduct).subscribe((res) => {
      this.showSpinner = false;
      this.alertClass = 'success-message';
      this.alertMessage = 'Successfully created record!';
    }, (err) => {
      this.alertClass = 'error-message';
      this.alertMessage = err.error + ' Please contact system administrator.';
      this.showSpinner = false;
    });
  }

  updateObject() {
    this.newProduct.organizationId = this.organizationId;
    this.newProduct.name = this.productName;
    this.newProduct.description = this.productDescription;
    this.newProduct.accountId = this.accountId;
    this.newProduct.productNo = this.productNo;
    this.newProduct.suppliersProductNo = this.suppProdNp;
    this.newProduct.salesTaxRulesetId = this.prodSalesTax;
    this.newProduct.isArchived = this.selected;
  }
}