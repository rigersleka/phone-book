import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactDetailContainer } from './components/contact-detail-container/contact-detail-container';
import { ContactDetailForm } from './components/contact-detail-form/contact-detail-form';
import { ContactDetailForms } from './components/contact-detail-forms/contact-detail-forms';
import { ContactDetailSearch } from './components/contact-detail-search/contact-detail-search.component';
import { ContactDetailService } from './service/contact-detail.service';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';

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
    WelcomeComponent,
  ],
  providers: [ContactDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
