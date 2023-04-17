import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhoneBookListComponent } from './components/phone-book-list/phone-book-list.component';
import { PhoneBookService } from './service/phone-book.service';
import { PhoneBookTemplateComponent } from './components/phone-book/phone-book-template/phone-book-template.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookTemplateComponent,
    PhoneBookListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [PhoneBookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
