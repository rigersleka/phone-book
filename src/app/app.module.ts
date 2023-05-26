import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactDetailContainer } from './components/contact-detail-container/contact-detail-container';
import { ContactDetailForm } from './components/contact-detail-form/contact-detail-form';
import { ContactDetailForms } from './components/contact-detail-forms/contact-detail-forms';
import { ContactDetailSearch } from './components/contact-detail-search/contact-detail-search.component';
import { ContactDetailService } from './service/contact-detail.service';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './service/loading.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesService } from './service/messages.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailForm,
    ContactDetailForms,
    ContactDetailContainer,
    ContactDetailSearch,
    LoadingComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HeaderComponent, // standalone component be DECLARED at imports, not at DECLARATIONS
    HttpClientModule,
    /* Import Angular Material */
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  providers: [ContactDetailService, LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
