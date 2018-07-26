import { Component, OnInit, Input } from '@angular/core';
import { EntryList } from '../services/entryList.service';
import { EntryFormComponentComponent } from '../entry-form-component/entry-form-component.component';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {


  entryList: Array<any>;
  displayForm: Boolean = false;

  constructor(public service: EntryList) {
    service.getEntries().subscribe((lista)  => this.entryList = lista)
  }
  activateForm(){
    this.displayForm = !this.displayForm;
  }
  ngOnInit() {
  }

}
