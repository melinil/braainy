import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'contact-list', component: ContactsComponent },
  { path: 'contact-create', component: CreateContactComponent },
  { path: 'product-list', component: ProductsComponent },
  { path: 'product-create', component: CreateProductComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '', component: ContactsComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
