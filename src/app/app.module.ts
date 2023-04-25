import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailContainer } from './components/contact-detail-container/contact-detail-container';
import { ContactDetailForm } from './components/contact-detail-form/contact-detail-form';
import { ContactDetailForms } from './components/contact-detail-forms/contact-detail-forms';
import { ContactDetailSearch } from './components/contact-detail-search/contact-detail-search.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactDetailService } from './service/contact-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailForm,
    ContactDetailForms,
    ContactDetailContainer,
    ContactDetailSearch,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [ContactDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
