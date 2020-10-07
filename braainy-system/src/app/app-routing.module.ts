import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  { path: 'contact-list', component: ContactsComponent },
  { path: 'product-list', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
