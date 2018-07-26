import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryList } from './services/entryList.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponentComponent } from './entry-form-component/entry-form-component.component'

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntryList],
  bootstrap: [AppComponent]
})
export class AppModule { }
