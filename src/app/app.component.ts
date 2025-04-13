import { Component } from '@angular/core';
import { FieldsComponent } from './fields/fields.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NavbarComponent,
    ProductComponent,
    FieldsComponent,
    ServicesComponent,
    OurWorkComponent,
    TestmonialComponent,
    FooterComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  title = 'microtec-task';
}
