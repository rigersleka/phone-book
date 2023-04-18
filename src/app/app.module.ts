import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhoneBookListComponent } from './components/phone-book-list/phone-book-list.component';
import { PhoneBookService } from './service/phone-book.service';
import { PhoneBookTemplateComponent } from './components/phone-book/phone-book-template/phone-book-template.component';
import { PhoneBookMultipleComponent } from './components/phone-book-multiple/phone-book-multiple.component';
import { PhoneBookSearchComponent } from './components/phone-book-search/phone-book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookTemplateComponent,
    PhoneBookListComponent,
    PhoneBookMultipleComponent,
    PhoneBookSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [PhoneBookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
