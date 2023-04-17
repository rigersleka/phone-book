import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhoneBookTemplateComponent } from './components/phone-book/phone-book-template/phone-book-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './custom-pipes/search-filter.pipe';

@NgModule({
  declarations: [AppComponent, PhoneBookTemplateComponent, SearchFilterPipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
