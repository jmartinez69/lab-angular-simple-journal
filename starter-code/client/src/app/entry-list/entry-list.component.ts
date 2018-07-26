import { Component, OnInit } from '@angular/core';
import { EntryList } from '../services/entryList.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entryList: Array<any>;

  constructor(public service: EntryList) {
    service.getEntries().subscribe((lista)  => this.entryList = lista)
  }
  
  ngOnInit() {
  }

}
